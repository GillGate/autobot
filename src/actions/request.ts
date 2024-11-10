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
import { autoParamsSteps } from "#root/config/auto.config.ts";

export const request = new Composer<MyContext>();

request.use(hydrate());
request.use(conversations());
request.use(createConversation(creation));

request.callbackQuery("request__create", async (ctx) => {
    await ctx.editMessageText("Выберите страну вашей марки автомобиля:", {
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

// Параметры

// request.callbackQuery(/request__gen_/, async (ctx) => {
//     let currentIndexGen = ctx.callbackQuery.data.split("__gen_")[1];
//     ctx.session.request.gen = currentIndexGen;

//     const firstStep = autoParamsSteps[0];

//     await ctx.editMessageText(firstStep.nextStepText, {
//         reply_markup: getAutoParamsMenu(firstStep.nextStep, firstStep.backwardsText),
//     });

//     ctx.answerCallbackQuery();
// });

request.callbackQuery(
    /request__\(|gen|carbody|trans|engine|drive|condition|bodycolor|salonmaterial|saloncolor|\)_/,
    async (ctx) => {
        let currentParamData = ctx.callbackQuery.data.split("request__")[1];
        let currentParam = currentParamData.split("_")[0];
        let currentParamValue = currentParamData.split("_")[1];

        ctx.session.request[currentParam] = currentParamValue;
        const currentStep = autoParamsSteps.find((step) => step.step === currentParam);

        console.log(currentStep);
        console.log(currentParam, currentParamValue);

        await ctx.editMessageText(currentStep.nextStepText, {
            reply_markup: getAutoParamsMenu(currentStep.nextStep, currentStep.backwardsText),
        });

        ctx.answerCallbackQuery();
    }
);

request.callbackQuery(/request__exchange_/, async (ctx) => {
    let isExchange = ctx.callbackQuery.data.split("__exchange_")[1];
    ctx.session.request.exchange = isExchange === "yes" ? true : false;

    await ctx.editMessageText("Информация о переходе на следующий этап, вывод всей инфы", {
        reply_markup: getFirstStageEndMenu(),
    });
    ctx.answerCallbackQuery();
});

request.callbackQuery("request__second_stage", async (ctx) => ctx.conversation.enter("creation"));
