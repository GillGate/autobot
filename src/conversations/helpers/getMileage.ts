import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { backMainMenu } from "#root/keyboards/general.ts";
import { MyContext } from "#root/index.ts";
import { ConversationFn } from "@grammyjs/conversations";
import regexConfig from "#root/config/regex.config.ts";

export const getMileage:ConversationFn<MyContext> = async (conversation, ctx) => {
    return await conversation.waitUntil(
        async (ctx) => {
            let mileageText = ctx.message?.text;

            if(regexConfig.mileage.test(mileageText)) {
                let mileage = parseInt(mileageText);
                ctx.session.request.mileage = mileage;
                return true;
            }

            return false;
        },
        {
            otherwise: (ctx) =>
                unlessActions(ctx, () => {
                    ctx.reply("Укажите корректный пробег (км):", {
                        reply_markup: backMainMenu,
                        parse_mode: "HTML",
                    });
                }),
        }
    )
}