import { NextFunction } from "grammy";
import { MyContext } from '#root/index.ts';
import sendStartMessage from "#root/handlers/sendStartMessage.ts";

export default async function (ctx: MyContext, next: NextFunction) {
    let currentMsgId = ctx?.update?.message?.message_id ?? ctx?.callbackQuery?.message?.message_id;
    let lastMsgId = ctx.session.lastMsgId ?? 0;

    if (currentMsgId! < lastMsgId || lastMsgId === 0) {
        return await sendStartMessage(ctx, true);
    }
    else {
        ctx.session.lastMsgId = currentMsgId!;

        if (ctx?.callbackQuery) {
            let cbQMessage = await ctx.callbackQuery.message;

            ctx.session.routeHistory.push({
                text: cbQMessage?.text,
                reply_markup: cbQMessage?.reply_markup,
            });
        }

        await next();
    }
}
