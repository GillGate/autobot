import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { backMainMenu } from "#root/keyboards/general.ts";
import { MyContext } from "#root/index.ts";
import { ConversationFn } from "@grammyjs/conversations";
import regexConfig from "#root/config/regex.config.ts";
import limitsConfig from "#root/config/limits.config.ts";

export const getPrice:ConversationFn<MyContext> = async (conversation, ctx) => {
    return await conversation.waitUntil(
        async (ctx) => {
            const { price: priceLimits } = limitsConfig;
            let priceText = ctx.message?.text;

            if(regexConfig.price.test(priceText) && +priceText > priceLimits.min) {
                ctx.session.request.price = parseInt(priceText);
                return true;
            }

            return false;
        },
        {
            otherwise: (ctx) =>
                unlessActions(ctx, () => {
                    ctx.reply("Укажите корректную цену в долларах:", {
                        reply_markup: backMainMenu,
                        parse_mode: "HTML",
                    });
                }),
        }
    )
}