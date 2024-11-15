import autoConfig, { autoParams, RequestParams } from "#root/config/auto.config.ts";
import { getEmoji } from "#root/utils/getEmoji.ts";
import { formatString, translate } from "#root/utils/translate.ts";
import { InlineKeyboard } from "grammy";

export function getBrandRegionMenu() {
    let regionMenu = new InlineKeyboard();

    regionMenu.text("🇺🇸 Америка", "request__region_america").row();
    regionMenu.text("🌍 Европа", "request__region_europe").row();
    regionMenu.text("🇨🇳 Китай", "request__region_china").row();
    regionMenu.text("🌏 Остальная Азия", "request__region_asia").row();
    regionMenu.row().text("‹ В главное меню", "main_menu");

    return regionMenu;
}

export function getBrandMenu(region: string) {
    let brandMenu = new InlineKeyboard();

    // for(let brand of Object.keys(autoConfig[region])) {
    //     console.log(brand);
    //     brandMenu.text(`🇺🇸 ${brand}`, `request__brand_${brand}`);
    // }

    switch (region) {
        case "america":
            brandMenu
                .text("🇺🇸 Buick", "request__brand_Buick")
                .text("🇺🇸 Cadillac", "request__brand_Cadillac")
                .text("🇺🇸 Chevrolet", "request__brand_Chevrolet")
                .row()
                .text("🇺🇸 Chrysler", "request__brand_Chrysler")
                .text("🇺🇸 Dodge", "request__brand_Dodge")
                .text("🇺🇸 Ford", "request__brand_Ford")
                .row()
                .text("🇺🇸 GMC", "request__brand_GMC")
                .text("🇺🇸 Hummer", "request__brand_Hummer")
                .text("🇺🇸 Jeep", "request__brand_Jeep")
                .row()
                .text("🇺🇸 Lincoln", "request__brand_Lincoln")
                .text("🇺🇸 Mercury", "request__brand_Mercury")
                .text("🇺🇸 Oldsmobile", "request__brand_Oldsmobile")
                .row()
                .text("🇺🇸 Plymouth", "request__brand_Plymouth")
                .text("🇺🇸 Pontiac", "request__brand_Pontiac")
                .text("🇺🇸 RAM", "request__brand_Ram")
                .row()
                .text("🇺🇸 Rivian", "request__brand_Rivian")
                .text("🇺🇸 Saturn", "request__brand_Saturn")
                .text("🇺🇸 Tesla", "request__brand_Tesla");
            break;
        case "europe":
            brandMenu
                .text("🇩🇪 Alpina", "request__brand_Alpina")
                .text("🇩🇪 Audi", "request__brand_Audi")
                .text("🇩🇪 BMW", "request__brand_BMW")
                .row()
                .text("🇩🇪 Mercedes-Benz", "request__brand_Mercedes-Benz")
                .text("🇩🇪 Opel", "request__brand_Opel")
                .row()
                .text("🇩🇪 Porsche", "request__brand_Porsche")
                .text("🇩🇪 Smart", "request__brand_Smart")
                .row()
                .text("🇩🇪 Trabant", "request__brand_Trabant")
                .text("🇩🇪 Volkswagen", "request__brand_Volkswagen")
                .text("🇩🇪 Wartburg", "request__brand_Wartburg")
                .row();

            brandMenu
                .text("🇫🇷 Citroen", "request__brand_Citroen")
                .text("🇫🇷 DS", "request__brand_DS")
                .row()
                .text("🇫🇷 Peugeot", "request__brand_Peugeot")
                .text("🇫🇷 Renault", "request__brand_Renault")
                .row();

            brandMenu.text("🇸🇪 Saab", "request__brand_Saab").text("🇸🇪 Volvo", "request__brand_Volvo");

            brandMenu.text("🇳🇴 Think", "request__brand_Think").row();

            brandMenu
                .text("🇷🇺 Ambertruck", "request__brand_Ambertruck")
                .text("🇷🇺 Lada (ВАЗ)", "request__brand_Lada (ВАЗ)")
                .text("🇷🇺 Vortex", "request__brand_Vortex")
                .row()
                .text("🇷🇺 ГАЗ", "request__brand_ГАЗ")
                .text("🇷🇺 ИЖ", "request__brand_ИЖ")
                .row()
                .text("🇷🇺 Москвич", "request__brand_Москвич")
                .text("🇷🇺 ТагАЗ", "request__brand_ТагАЗ")
                .text("🇷🇺 УАЗ", "request__brand_УАЗ")
                .row();

            brandMenu
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Aston Martin", "request__brand_Aston Martin")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Bentley", "request__brand_Bentley")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Jaguar", "request__brand_Jaguar")
                .row()
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Land Rover", "request__brand_Land Rover")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Lotus", "request__brand_Lotus")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 MG", "request__brand_MG")
                .row()
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 MINI", "request__brand_MINI")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Rolls-Royce", "request__brand_Rolls-Royce")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Rover", "request__brand_Rover")
                .row();

            brandMenu
                .text("🇮🇹 Abarth", "request__brand_Abarth")
                .text("🇮🇹 Alfa Romeo", "request__brand_Alfa Romeo")
                .text("🇮🇹 Ferrari", "request__brand_Ferrari")
                .row()
                .text("🇮🇹 Fiat", "request__brand_Fiat")
                .text("🇮🇹 Lancia", "request__brand_Lancia")
                .text("🇮🇹 Maserati", "request__brand_Maserati")
                .row();

            brandMenu
                .text("🇪🇸 Cupra", "request__brand_Cupra")
                .text("🇪🇸 Santana", "request__brand_Santana")
                .text("🇪🇸 SEAT", "request__brand_Seat")
                .row();

            brandMenu.text("🇨🇿 Skoda", "request__brand_Skoda");

            brandMenu.text("🇷🇴 Dacia", "request__brand_Dcia");

            brandMenu.text("🇧🇾 Belgee", "request__brand_Belgee").row();

            brandMenu
                .text("🇮🇷 Iran Khodro", "request__brand_Iran Khodro")
                .text("🇮🇷 Saipa", "request__brand_Saipa");

            break;
        case "china":
            brandMenu
                .text("Aito", "request__brand_Aito")
                .text("Avatr", "request__brand_Avatr")
                .text("BAIC", "request__brand_BAIC")
                .row()
                .text("BAW", "request__brand_BAW")
                .text("Brilliance", "request__brand_Brilliance")
                .text("BYD", "request__brand_BYD")
                .row()
                .text("Changan", "request__brand_Changan")
                .text("Chery", "request__brand_Chery")
                .text("Denza", "request__brand_Denza")
                .row()
                .text("Dongfeng", "request__brand_Dongfeng")
                .text("Dongfeng Honda", "request__brand_Dongfeng Honda")
                .text("EXEED", "request__brand_EXEED")
                .row()
                .text("FangChengBao", "request__brand_FangChengBao")
                .text("FAW", "request__brand_FAW")
                .text("GAC", "request__brand_GAC")
                .row()
                .text("Geely", "request__brand_Geely")
                .text("Great Wall", "request__brand_Great Wall")
                .text("Hafei", "request__brand_Hafei")
                .row()
                .text("Haima", "request__brand_Haima")
                .text("Haval", "request__brand_Haval")
                .text("Hongqi", "request__brand_Hongqi")
                .row()
                .text("Hongxing", "request__brand_Hongxing")
                .text("Hozon", "request__brand_Hozon")
                .text("JAC", "request__brand_JAC")
                .row()
                .text("Jetour", "request__brand_Jetour")
                .text("Jetta", "request__brand_Jetta")
                .text("Jiangling", "request__brand_Jiangling")
                .row()
                .text("Jiyue", "request__brand_Jiyue")
                .text("Jmev", "request__brand_Jmev")
                .text("Kaiyi", "request__brand_Kaiyi")
                .row()
                .text("Leapmotor", "request__brand_Leapmotor")
                .text("Lifan", "request__brand_Lifan")
                .text("Livan", "request__brand_Livan")
                .row()
                .text("LiXiang", "request__brand_LiXiang")
                .text("Lynk & Co", "request__brand_Lynk & Co")
                .text("M-Hero", "request__brand_M-Hero")
                .row()
                .text("Maple", "request__brand_Maple")
                .text("Nio", "request__brand_Nio")
                .text("Omoda", "request__brand_Omoda")
                .row()
                .text("Ora", "request__brand_Ora")
                .text("Polar", "request__brand_Polar")
                .text("Polestar", "request__brand_Polestar")
                .row()
                .text("Roewe", "request__brand_Roewe")
                .text("SERES", "request__brand_SERES")
                .text("Shenlan", "request__brand_Shenlan")
                .row()
                .text("Shineray", "request__brand_Shineray")
                .text("Skywell", "request__brand_Skywell")
                .text("Skyworth", "request__brand_Skyworth")
                .row()
                .text("Tank", "request__brand_Tank")
                .text("VGV", "request__brand_VGV")
                .text("Voyah", "request__brand_Voyah")
                .row()
                .text("Weltmeister", "request__brand_Weltmeister")
                .text("Wey", "request__brand_Wey")
                .text("Wuling", "request__brand_Wuling")
                .row()
                .text("Xiaomi", "request__brand_Xiaomi")
                .text("Xpeng", "request__brand_Xpeng")
                .text("Young", "request__brand_Young")
                .row()
                .text("Zeekr", "request__brand_Zeekr")
                .text("Zotye", "request__brand_Zotye")
                .text("ZX", "request__brand_ZX");

            break;
        case "asia":
            brandMenu
                .text("🇰🇷 Daewoo", "request__brand_Daewoo")
                .text("🇰🇷 Genesis", "request__brand_Genesis")
                .row()
                .text("🇰🇷 Hyundai", "request__brand_Hyundai")
                .text("🇰🇷 Kia", "request__brand_Kia")
                .row()
                .text("🇰🇷 Renault Samsung", "request__brand_Renault Samsung")
                .text("🇰🇷 SsangYong", "request__brand_SsangYong")
                .row();

            brandMenu
                .text("🇯🇵 Acura", "request__brand_Acura")
                .text("🇯🇵 Daihatsu", "request__brand_Daihatsu")
                .text("🇯🇵 Datsun", "request__brand_Datsun")
                .row()
                .text("🇯🇵 Honda", "request__brand_Honda")
                .text("🇯🇵 Infiniti", "request__brand_Infiniti")
                .text("🇯🇵 Isuzu", "request__brand_Isuzu")
                .row()
                .text("🇯🇵 Lexus", "request__brand_Lexus")
                .text("🇯🇵 Mazda", "request__brand_Mazda")
                .row()
                .text("🇯🇵 Mitsubishi", "request__brand_Mitsubishi")
                .text("🇯🇵 Nissan", "request__brand_Nissan")
                .text("🇯🇵 Scion", "request__brand_Scion")
                .row()
                .text("🇯🇵 Subaru", "request__brand_Subaru")
                .text("🇯🇵 Suzuki", "request__brand_Suzuki")
                .text("🇯🇵 Toyota", "request__brand_Toyota")
                .row();

            brandMenu.text("🇺🇿 Ravon", "request__brand_Ravon");

            brandMenu.text("🇲🇾 Proton", "request__brand_Proton");

            brandMenu.text("🇮🇳 Tata", "request__brand_Tata");
            break;
    }

    brandMenu.row().text("‹ Изменить регион", "back");

    return brandMenu;
}

export function getModelMenu(brand) {
    let modelMenu = new InlineKeyboard();

    for (let curModel of Object.keys(autoConfig["Abarth"])) {
        modelMenu.text(curModel, `request__model_${curModel}`).row();
    }

    modelMenu.text("‹ Изменить марку", "back");

    return modelMenu;
}

export function getYearsByModelMenu(model) {
    let yearsMenu = new InlineKeyboard();

    for (let curYear of Object.keys(autoConfig["Abarth"]["124 Spider"])) {
        yearsMenu.text(curYear, `request__year_${curYear}`).row();
    }

    yearsMenu.text("‹ Изменить модель", "back");

    return yearsMenu;
}

export function getGensByYearMenu(year) {
    let gensMenu = new InlineKeyboard();

    let genIndex = 0;
    for (let curGen of Object.values(autoConfig["Abarth"]["500"][2015])) {
        gensMenu.text(curGen, `request__gen_${genIndex}`).row();
        genIndex++;
    }

    gensMenu.text("‹ Изменить год выпуска", "back");

    return gensMenu;
}

// Параметры

export function getAutoParamsMenu(param: keyof RequestParams, backwardsText: string) {
    let paramsMenu = new InlineKeyboard();

    let paramIndex = 1;
    for (let curParam of autoParams[param]) {
        paramsMenu.text(`${getEmoji(curParam)} ${translate(curParam)}`, `request__${param}_${curParam}`);

        if (
            param === "drive" ||
            param === "condition" ||
            param === "salonmaterial" ||
            param === "saloncolor" || 
            param === "exchange"
        ) {
            paramsMenu.row();
        } else {
            if (paramIndex % 2 === 0) {
                paramsMenu.row();
            }
        }

        paramIndex++;
    }

    paramsMenu.row();
    paramsMenu.text(backwardsText, "back");

    return paramsMenu;
}

export function getFirstStageEndMenu() {
    let optionsMenu = new InlineKeyboard();

    optionsMenu.text("Всё верно, идём дальше", "request__second_stage").row();
    // в теории сюда можно добавить кнопки с возвращением на каждый этап, передав весь request
    optionsMenu.text("‹ Назад", "back");

    return optionsMenu;
}
