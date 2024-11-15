import unlessActions from "#root/conversations/helpers/unlessActions.ts";
import { backMainMenu, conversationOptionsMenu } from "#root/keyboards/general.ts";
import { MyContext } from "#root/index.ts";
import { ConversationFn } from "@grammyjs/conversations";
import limitsConfig from "#root/config/limits.config.ts";

export const getPhotos:ConversationFn<MyContext> = async (conversation, ctx) => {
    return await conversation.waitUntil(
        async (ctx: MyContext) => {
            if (ctx.callbackQuery?.data === "conversation__skip") {
                ctx.answerCallbackQuery();
                return true;
            }

            if(conversation.session.request.gallery.length === limitsConfig.gallery.maxLength) {
                return true;
            }

            if(ctx.message?.photo) {
                let photo = ctx.message.photo.pop();

                if(photo.file_size > limitsConfig.gallery.maxBytes) {
                    return false;
                }
                else {
                    conversation.session.request.gallery.push(photo["file_id"]);
                    await conversation.skip();
                }
            }

            if(ctx.message?.document) {
                const document = ctx.message.document;
                if(["image/png", "image/jpeg"].includes(document.mime_type)) {
                    if(document.file_size > limitsConfig.gallery.maxBytes) {
                        return false;
                    }
                    else {
                        conversation.session.request.gallery.push(document["file_id"]);
                        await conversation.skip();
                    }
                }
            }

            return false;
    }, {
        otherwise: (ctx) => 
            unlessActions(ctx, () => {
                if(ctx.message?.photo) {
                    ctx.reply(`Эта фотография оказалась слишком большой, попробуйте добавить другие фотографиии и/или нажмите кнопку "Продолжить"`, {
                        reply_markup: conversationOptionsMenu(),
                        reply_parameters: { message_id: ctx.msg.message_id },
                    });
                }
                else if (ctx.message?.document) {
                    ctx.reply(`Этот файл оказался слишком большой, попробуйте добавить другие фотографии и/или нажмите кнопку "Продолжить"`, {
                        reply_markup: conversationOptionsMenu(),
                        reply_parameters: { message_id: ctx.msg.message_id },
                    });
                }
                else {
                    let photoText = `Отправьте фото вашего автомобиля (максимум 10 и не больше 20 Мб каждая)\n`;
                    photoText += `После загрузки всех фото, нажмите кнопку "Продолжить"`;

                    ctx.reply(photoText, {
                        reply_markup: conversationOptionsMenu()
                    });
                }
            })
    })
}