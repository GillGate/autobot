import { ConversationFn } from "@grammyjs/conversations";
import { MyContext } from "..";
import { backMainMenu, conversationOptionsMenu } from "#root/keyboards/general.ts";
import { creationHelpers } from "./helpers/creation";

export const creation: ConversationFn<MyContext> = async (conversation, ctx) => {
    let currentRequest = conversation.session.request;

    ctx.editMessageText("Укажите пробег вашего автомобиля (км):", {
        reply_markup: backMainMenu,
    });

    await creationHelpers.getMileage(conversation, ctx);

    if(currentRequest.params.engine === "electro") {
        ctx.reply("Укажите запас хода для вашего электродвигателя (км):", {
            reply_markup: backMainMenu,
        });

        await creationHelpers.getPowerReserve(conversation, ctx);
    }
    // else {
    //     ctx.reply("Укажите объем топливного бака для вашего двигателя (см³):", {
    //         reply_markup: backMainMenu,
    //     });

    //     await creationHelpers.getFuelCapacity(conversation, ctx);
    // }

    let vinText = "Укажите VIN-номер\n\n";
        vinText += "<i>Его обычно можно найти в тех. паспорте или на кузове автомобиля.\n";
        vinText += "Также он может быть на стойке водительской двери, под лобовым стеклом, на моторном щите или под пассажирским сиденьем.</i>\n";
    
    //   Необязательно для транспорта старше 2000 г.
    //   Но мы рекомендуем заполнить это поле. 
    //   Объявление с указанным VIN привлекает внимание, повышает доверие к продавцу и обозначается специальной биркой

    ctx.reply(vinText, {
        reply_markup: backMainMenu,
        parse_mode: "HTML"
    });

    await creationHelpers.getVin(conversation, ctx);

    let modificationText = "Укажите модификацию вашего авто\n"
    modificationText    += `Текст может быть в формате: "1,2 MT 86 л.с."\n`

    ctx.reply(modificationText, {
        reply_markup: conversationOptionsMenu(),
        parse_mode: "HTML"
    });

    await creationHelpers.getModification(conversation, ctx);

    ctx.reply("Укажите желаемую цену за авто, в пересчёте на доллар:", {
        reply_markup: backMainMenu,
        parse_mode: "HTML"
    });

    await creationHelpers.getPrice(conversation, ctx);

    ctx.reply("Укажите свой телефон для связи в формате: +71112223344", {
        reply_markup: backMainMenu,
        parse_mode: "HTML"
    });

    await creationHelpers.getPhone(conversation, ctx);

    let photoText = `Отправьте фото вашего автомобиля (максимум 10 и не больше 20 Мб каждая)\n`;
        photoText += `Если фотографий меньше 10 - после загрузки всех фото, нажмите кнопку "Продолжить"`;

    ctx.reply(photoText, {
        reply_markup: conversationOptionsMenu()
    });

    await creationHelpers.getPhotos(conversation, ctx);

    currentRequest = conversation.session.request;

    let text = `<b>Дополнительные параметры:</b>\n`;
        text += `Пробег: <u>${currentRequest.mileage} км.</u>\n`;
        text += `VIN-номер: <u>${currentRequest.vin}</u>\n`;
        text += `Модификация: <u>${currentRequest.modification}</u>\n`;
        text += `Выставленная цена: <u>${currentRequest.price} $</u>\n`;
        text += `Телефон для связи: <u>${currentRequest.phone}</u>\n`;
        text += `Фотографий на публикацию: <u>${currentRequest.gallery.length}</u>\n`;

    ctx.reply(text, {
        reply_markup: backMainMenu,
        parse_mode: "HTML"
    })
}