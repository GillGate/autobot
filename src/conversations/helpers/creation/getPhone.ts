import { backMainMenu } from "#root/keyboards/general.ts";
import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { ConversationFn } from "@grammyjs/conversations";
import { MyContext } from "#root/index.ts";
import regexConfig from "#root/config/regex.config.ts";

export const getPhone:ConversationFn<MyContext> = async (conversation, ctx) => {
     return await conversation.waitUntil(
          async (ctx) => {
               let phoneText = ctx.message?.text;

               if(regexConfig.phone.test(phoneText)) {
                    conversation.session.request.phone = phoneText;

                    return true;
               }

               return false;
          },
          {
               otherwise: (ctx) =>
                    unlessActions(ctx, () => {
                         ctx.reply("Пожалуйста, напишите корректный номер", {
                              reply_markup: backMainMenu,
                         })
                    })
          }
     )
}
