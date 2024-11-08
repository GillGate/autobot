import "dotenv/config";
import { Bot, CallbackQueryContext, Context, GrammyError, HttpError, session, SessionFlavor } from "grammy";
import { hydrate, HydrateFlavor } from "@grammyjs/hydrate";
import { ConversationFlavor } from "@grammyjs/conversations";
import { request } from "./actions/request";
import traceRoutes from "./middleware/traceRoutes";
import sendStartMessage from "./handlers/sendStartMessage";
import sessionConfig, { SessionData } from "./config/session.config";

export type MyContext = Context & SessionFlavor<SessionData> & HydrateFlavor<Context> & ConversationFlavor;

export const bot = new Bot<MyContext>(process.env.BOT_API_TOKEN!);

function initial(): SessionData {
    return structuredClone(sessionConfig);
  }

bot.use(
    session({
        initial,
    })
);
bot.use(hydrate());
bot.use(traceRoutes);
bot.use(request);

bot.command("start", async (ctx) => await sendStartMessage(ctx, true));
bot.callbackQuery("main_menu", async (ctx) => await sendStartMessage(ctx));

bot.callbackQuery("back", async (ctx) => {
    await ctx.session.routeHistory.pop();
    const routeParams = await ctx.session.routeHistory.pop();
    ctx.session.conversation = {};

    await ctx.editMessageText(routeParams.text, {
        reply_markup: routeParams.reply_markup,
        parse_mode: "HTML",
    });
    ctx.answerCallbackQuery();
});

bot.catch(async (err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}`);

    const e = err.error;
    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
        // await sendStartMessage(ctx, true);
    } else if (e instanceof HttpError) {
        console.log("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
        await sendStartMessage(ctx, true);
    }
});

bot.start();
