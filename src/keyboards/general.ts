import { InlineKeyboard } from "grammy";

export function getMainMenu() {
    let mainMenu = new InlineKeyboard();

    mainMenu
        .webApp("📱 Открыть веб-приложение", "https://av.by")
        .row()
        .text("🚘 Разместить объявление", "request__create")
        // .text("🚘 Разместить объявление", "request__second_stage")

    return mainMenu;
}

export function conversationOptionsMenu() {
    let optionsMenu = new InlineKeyboard();

    optionsMenu.text("Продолжить ›", "conversation__skip").row()
    optionsMenu.text("‹ В главное меню", "main_menu");

    return optionsMenu;
}

export const backMainMenu = new InlineKeyboard().text("‹ В главное меню", "main_menu");
export const backKeyboard = new InlineKeyboard().text("‹ Назад", "back");