import { MyContext } from "#root/index.ts";
import { OtherwiseHandler } from "@grammyjs/conversations";

export default async function (ctx: MyContext, otherwise: OtherwiseHandler<MyContext>) {
    if (ctx?.callbackQuery?.data === "back" || ctx?.callbackQuery?.data === "main_menu") {
        return;
    }
    
    if (["/start"].includes(ctx?.message?.text ?? "")) {
        return;
    }

    return await otherwise(ctx);
}
