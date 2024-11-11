import { ConversationFn } from "@grammyjs/conversations";
import { MyContext } from "..";
import { backMainMenu, conversationOptionsMenu } from "#root/keyboards/general.ts";
import { getMileage } from "./helpers/getMileage";
import { getPowerReserve } from "./helpers/getPowerReserve";
import { getVin } from "./helpers/getVin";
import { getModification } from "./helpers/getModification";
import { getPrice } from "./helpers/getPrice";
import { getPhone } from "./helpers/getPhone";

export const creation: ConversationFn<MyContext> = async (conversation, ctx) => {
    let currentSession = ctx.session;
    let currentRequest = ctx.session.request;
    
    ctx.editMessageText("Укажите пробег вашего автомобиля (км):", {
        reply_markup: backMainMenu,
    });

    await getMileage(conversation, ctx);

    console.log(currentRequest);

    if(currentRequest.engine === "electro") {
        ctx.reply("Укажите запас хода для вашего электродвигателя (км):", {
            reply_markup: backMainMenu,
        });

        await getPowerReserve(conversation, ctx);
    }
    else {
        // Объем, см³
    }

    console.log(currentRequest);

    let vinText = "Укажите VIN-номер\n\n";
        vinText += "<i>Его обычно можно найти в тех. паспорте или на кузове автомобиля.\n";
        vinText += "Также он может быть на стойке водительской двери, под лобовым стеклом, на моторном щите или под пассажирским сиденьем.</i>\n";
        
        /**
         * Необязательно для транспорта старше 2000 г.
         * Но мы рекомендуем заполнить это поле. 
         * Объявление с указанным VIN привлекает внимание, повышает доверие к продавцу и обозначается специальной биркой
         */

    ctx.reply(vinText, {
        reply_markup: backMainMenu,
        parse_mode: "HTML"
    });

    await getVin(conversation, ctx);

    console.log(currentRequest);

    let modificationText = "Укажите модификацию вашего авто\n"
    modificationText    += `Текст может быть в формате: "1,2 MT 86 л.с."\n`

    ctx.reply(modificationText, {
        reply_markup: conversationOptionsMenu(),
        parse_mode: "HTML"
    });

    await getModification(conversation, ctx);

    console.log(currentRequest);

    ctx.reply("Укажите желаемую цену за авто, в пересчёте на доллар:", {
        reply_markup: backMainMenu,
        parse_mode: "HTML"
    });

    await getPrice(conversation, ctx);

    console.log(currentRequest);

    ctx.reply("Укажите свой телефон для связи в формате: +71112223344", {
        reply_markup: backMainMenu,
        parse_mode: "HTML"
    });

    await getPhone(conversation, ctx);

    console.log(currentRequest);
}