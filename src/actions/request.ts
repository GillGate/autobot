import { Composer } from "grammy";
import { hydrate } from "@grammyjs/hydrate";
import { conversations, createConversation } from "@grammyjs/conversations";
import { creation } from "#root/conversations/creation.ts";
import { MyContext } from "..";
import { getBrandMenu, getBrandRegionMenu, getCarBodyMenu, getGensByYearMenu, getModelMenu, getTransMenu, getYearsByModelMenu } from "#root/keyboards/request.ts";

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

request.callbackQuery(/request__gen_/, async (ctx) => {
    let currentIndexGen = ctx.callbackQuery.data.split("__gen_")[1];
    ctx.session.request.genIndex = currentIndexGen;

    await ctx.editMessageText("Выберите кузов машины:", {
        reply_markup: getCarBodyMenu(),
    });

    ctx.answerCallbackQuery();
});

request.callbackQuery(/request__carbody_/, async (ctx) => {
    let currentCarBody = ctx.callbackQuery.data.split("__carbody_")[1];
    ctx.session.request.carBody = currentCarBody;

    await ctx.editMessageText("Выберите коробку передач:", {
        reply_markup: getTransMenu(),
    });

    ctx.answerCallbackQuery();
});