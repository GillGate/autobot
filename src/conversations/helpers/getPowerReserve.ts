import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { backMainMenu } from "#root/keyboards/general.ts";
import { MyContext } from "#root/index.ts";
import { ConversationFn } from "@grammyjs/conversations";
import regexConfig from "#root/config/regex.config.ts";

export const getPowerReserve:ConversationFn<MyContext> = async (conversation, ctx) => {
    return await conversation.waitUntil(
        async (ctx) => {
            let reserveText = ctx.message?.text;

            if(regexConfig.powerReserve.test(reserveText)) {
                ctx.session.request.reserve = parseInt(reserveText);
                return true;
            }

            return false;
        },
        {
            otherwise: (ctx) =>
                unlessActions(ctx, () => {
                    ctx.reply("Укажите корректный запас хода (км):", {
                        reply_markup: backMainMenu,
                        parse_mode: "HTML",
                    });
                }),
        }
    )
}