import { InlineKeyboard } from "grammy";

export function getMainMenu() {
    let mainMenu = new InlineKeyboard();

    mainMenu
        .webApp("📱 Открыть веб-приложение", "https://av.by")
        .row()
        .text("🚘 Разместить объявление", "request__create")

    return mainMenu;
}

export const backMainMenu = new InlineKeyboard().text("‹ В главное меню", "main_menu");
export const backKeyboard = new InlineKeyboard().text("‹ Назад", "back");