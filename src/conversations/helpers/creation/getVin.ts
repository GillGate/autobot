import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { backMainMenu } from "#root/keyboards/general.ts";
import { MyContext } from "#root/index.ts";
import { ConversationFn } from "@grammyjs/conversations";
import regexConfig from "#root/config/regex.config.ts";

export const getVin:ConversationFn<MyContext> = async (conversation, ctx) => {
    return await conversation.waitUntil(
        async (ctx) => {
            let vinText = ctx.message?.text;
            vinText = vinText.toUpperCase();

            if(regexConfig.vin.test(vinText)) {
                conversation.session.request.vin = vinText;
                return true;
            }

            return false;
        },
        {
            otherwise: (ctx) =>
                unlessActions(ctx, () => {
                    let text = "Укажите корректный VIN-номер:";
                    /**
                     * Cостоит из 17 символов. 
                     * Он может включать цифры и латинские буквы (кроме I, O и Q, чтобы избежать путаницы с цифрами).
                     */
                    ctx.reply(text, {
                        reply_markup: backMainMenu,
                        parse_mode: "HTML",
                    });
                }),
        }
    )
}