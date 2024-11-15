import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { backMainMenu } from "#root/keyboards/general.ts";
import { MyContext } from "#root/index.ts";
import { ConversationFn } from "@grammyjs/conversations";
import regexConfig from "#root/config/regex.config.ts";

export const getFuelCapacity:ConversationFn<MyContext> = async (conversation, ctx) => {
    return await conversation.waitUntil(
        async (ctx) => {
            if (ctx.callbackQuery?.data === "conversation__skip") {
                ctx.answerCallbackQuery();
                conversation.session.request.capacity = null;
                return true;
            }

            let capacityText = ctx.message?.text;

            if(regexConfig.fuelCapacity.test(capacityText)) {
                conversation.session.request.capacity = parseInt(capacityText);
                return true;
            }

            return false;
        },
        {
            otherwise: (ctx) =>
                unlessActions(ctx, () => {
                    ctx.reply("Укажите корректный объем топливного бака (см³):", {
                        reply_markup: backMainMenu,
                        parse_mode: "HTML",
                    });
                }),
        }
    )
}