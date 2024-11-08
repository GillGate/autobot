import { getMainMenu } from "#root/keyboards/general.ts";
import { MyContext } from "..";

export default async function (ctx:MyContext, replyMode = false) {
    ctx.session.routeHistory = [];
    ctx.session.conversation = {};
    ctx.session.temp = {};

    let helloText = `Сервис для размещения автомобилей`;

    // let user = await getUserData(ctx);

    if (replyMode) {
        let updatedCtx = await ctx.reply(helloText, {
            reply_markup: getMainMenu(),
            parse_mode: "HTML",
            link_preview_options: {
                is_disabled: true,
            },
        });
        ctx.session.lastMsgId = updatedCtx.message_id;
    } else {
        await ctx.editMessageText(helloText, {
            reply_markup: getMainMenu(),
            parse_mode: "HTML",
            link_preview_options: {
                is_disabled: true,
            },
        });
    }

    if (ctx?.callbackQuery && !replyMode) {
        ctx.answerCallbackQuery();
    }
}
