import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { backMainMenu, conversationOptionsMenu } from "#root/keyboards/general.ts";
import { MyContext } from "#root/index.ts";
import { ConversationFn } from "@grammyjs/conversations";
import regexConfig from "#root/config/regex.config.ts";
import limitsConfig from "#root/config/limits.config.ts";

export const getModification:ConversationFn<MyContext> = async (conversation, ctx) => {
    return await conversation.waitUntil(
        async (ctx) => {
            const { modification: modLimits } = limitsConfig;
            let modificationText = ctx.message?.text;

            if (ctx.callbackQuery?.data === "conversation__skip") {
                ctx.answerCallbackQuery();
                ctx.session.request.modification = "Не указано";
                return true;
            }

            if(!regexConfig.modification.test(modificationText)) {
                return false;
            }

            if (modificationText?.length >= modLimits.min && modificationText?.length <= modLimits.max) {
                ctx.session.request.modification = modificationText.trim();
                return true;
            }
        },
        {
            otherwise: (ctx) =>
                unlessActions(ctx, () => {
                    let text = "Укажите корректный формат модификации\n";
                        text += `Например: "1,2 MT 86 л.с."`;

                    ctx.reply(text, {
                        reply_markup: conversationOptionsMenu(),
                        parse_mode: "HTML",
                    });
                }),
        }
    )
}