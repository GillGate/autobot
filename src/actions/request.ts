import { Composer } from "grammy";
import { hydrate } from "@grammyjs/hydrate";
import { conversations, createConversation } from "@grammyjs/conversations";
import { creation } from "#root/conversations/creation.ts";
import { MyContext } from "..";
import {
    getAutoParamsMenu,
    getBrandMenu,
    getBrandRegionMenu,
    getFirstStageEndMenu,
    getGensByYearMenu,
    getModelMenu,
    getYearsByModelMenu,
} from "#root/keyboards/request.ts";
import autoConfig, { autoParamsSteps } from "#root/config/auto.config.ts";
import { translate } from "#root/utils/translate.ts";

export const request = new Composer<MyContext>();

request.use(hydrate());
request.use(conversations());
request.use(createConversation(creation));

request.callbackQuery("request__create", async (ctx) => {
    await ctx.editMessageText("Выберите регион вашей марки автомобиля:", {
        reply_markup: getBrandRegionMenu(),
    });
});

request.callbackQuery(/request__region_/, async (ctx) => {
    let currentRegion = ctx.callbackQuery.data.split("__region_")[1];
    ctx.session.request.region = currentRegion;

    await ctx.editMessageText("Выберите марку:", {
        reply_markup: getBrandMenu(currentRegion),
    });
    ctx.answerCallbackQuery();
});

request.callbackQuery(/request__brand_/, async (ctx) => {
    let currentBrand = ctx.callbackQuery.data.split("__brand_")[1];
    ctx.session.request.brand = currentBrand;

    console.log(currentBrand);

    await ctx.editMessageText("Выберите модель:", {
        reply_markup: getModelMenu(currentBrand),
    });
    ctx.answerCallbackQuery();
});

request.callbackQuery(/request__model_/, async (ctx) => {
    let currentModel = ctx.callbackQuery.data.split("__model_")[1];
    ctx.session.request.model = currentModel;

    await ctx.editMessageText("Выберите год выпуска:", {
        reply_markup: getYearsByModelMenu(currentModel),
    });
    ctx.answerCallbackQuery();
});

request.callbackQuery(/request__year_/, async (ctx) => {
    let currentYear = ctx.callbackQuery.data.split("__year_")[1];
    ctx.session.request.year = currentYear;

    await ctx.editMessageText("Выберите поколение:", {
        reply_markup: getGensByYearMenu(currentYear),
    });
    ctx.answerCallbackQuery();
});

request.callbackQuery(/request__gen_/, async (ctx) => {
    ctx.session.request.gen = ctx.callbackQuery.data.split("__gen_")[1];

    const firstStep = autoParamsSteps[0];
    await ctx.editMessageText(firstStep.nextStepText, {
        reply_markup: getAutoParamsMenu(firstStep.nextStep, firstStep.backwardsText),
    });
    ctx.answerCallbackQuery();
});

// Параметры

request.callbackQuery(
    /request__\(|carbody|trans|engine|drive|condition|bodycolor|salonmaterial|saloncolor|\)_/,
    async (ctx) => {
        let currentParamData = ctx.callbackQuery.data.split("request__")[1];
        let currentParam = currentParamData.split("_")[0];
        let currentParamValue = currentParamData.split("_")[1];

        console.log(currentParamData);

        ctx.session.request.params[currentParam] = currentParamValue;
        const currentStep = autoParamsSteps.find((step) => step.step === currentParam);

        await ctx.editMessageText(currentStep.nextStepText, {
            reply_markup: getAutoParamsMenu(currentStep.nextStep, currentStep.backwardsText),
        });

        ctx.answerCallbackQuery();
    }
);

request.callbackQuery(/request__exchange_/, async (ctx) => {
    ctx.session.request.params.exchange = ctx.callbackQuery.data.split("__exchange_")[1];

    const request = ctx.session.request;

    let text = `Вы завершили первый этап размещения, далее последует ввод остальных параметров вручную.\n`
        text += `Проверьте данные о вашей заявке до необратимого перехода на следующий этап.\n\n`

        text += `<b>Общая информация:</b>\n`
        text += `Марка автомобиля: <u>${request.brand}</u>\n`
        text += `Модель и год выпуска: <u>${request.model} - ${request.year}</u>\n`
        text += `Поколение автомобиля: <u>${autoConfig["Abarth"]["500"][2015][0]}</u>\n\n`
        // text += `Поколение автомобиля: ${autoConfig[request.brand][request.model][request.year][request.gen]}\n\n`

        text += `<b>Параметры:</b>\n`;
        text += `Кузов автомобиля: <u>${translate(request.params.carbody)}</u>\n`;
        text += `Коробка передач: <u>${translate(request.params.trans)}</u>\n`;
        text += `Двигатель: <u>${translate(request.params.engine)}</u>\n`;
        text += `Привод: <u>${translate(request.params.drive)}</u>\n`;
        text += `Состояние: <u>${translate(request.params.condition)}</u>\n`;
        text += `Цвет кузова: <u>${translate(request.params.bodycolor)}</u>\n`;
        text += `Материал салона: <u>${translate(request.params.salonmaterial)}</u>\n`;
        text += `Цвет салона: <u>${translate(request.params.saloncolor)}</u>\n`;


    await ctx.editMessageText(text, {
        reply_markup: getFirstStageEndMenu(),
        parse_mode: "HTML"
    });
    ctx.answerCallbackQuery();
});

request.callbackQuery("request__second_stage", async (ctx) => ctx.conversation.enter("creation"));
