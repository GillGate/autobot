import autoConfig, { AutoParams, autoParams } from "#root/config/auto.config.ts";
import { formatString, translate } from "#root/helpers/translate.ts";
import { InlineKeyboard } from "grammy";

export function getBrandRegionMenu() {
    let regionMenu = new InlineKeyboard();

    regionMenu.text("🇺🇸 Америка", "request__region_america").row()
    regionMenu.text("🌍 Европа", "request__region_europe").row()
    regionMenu.text("🇨🇳 Китай", "request__region_china").row()
    regionMenu.text("🌏 Остальная Азия", "request__region_asia").row()
    regionMenu.row().text("‹ В главное меню", "main_menu");

    return regionMenu;
}

export function getBrandMenu(region: string) {
    let brandMenu = new InlineKeyboard();

    switch (region) {
        case "america":
            brandMenu
                .text("🇺🇸 Buick", "request__brand_buick")
                .text("🇺🇸 Cadillac", "request__brand_cadillac")
                .text("🇺🇸 Chevrolet", "request__brand_chevrolet").row()
                .text("🇺🇸 Chrysler", "request__brand_chrysler")
                .text("🇺🇸 Dodge", "request__brand_dodge")
                .text("🇺🇸 Ford", "request__brand_ford").row()
                .text("🇺🇸 GMC", "request__brand_gmc")
                .text("🇺🇸 Hummer", "request__brand_hummer")
                .text("🇺🇸 Jeep", "request__brand_jeep").row()
                .text("🇺🇸 Lincoln", "request__brand_lincoln")
                .text("🇺🇸 Mercury", "request__brand_mercury")
                .text("🇺🇸 Oldsmobile", "request__brand_oldsmobile").row()
                .text("🇺🇸 Plymouth", "request__brand_plymouth")
                .text("🇺🇸 Pontiac", "request__brand_pontiac")
                .text("🇺🇸 RAM", "request__brand_ram").row()
                .text("🇺🇸 Rivian", "request__brand_rivian")
                .text("🇺🇸 Saturn", "request__brand_saturn")
                .text("🇺🇸 Tesla", "request__brand_tesla")
                
            break;
        case "europe": 
            brandMenu
                .text("🇩🇪 Alpina", "request__brand_alpina")
                .text("🇩🇪 Audi", "request__brand_audi")
                .text("🇩🇪 BMW", "request__brand_bmw")
                .row()
                .text("🇩🇪 Mercedes-Benz", "request__brand_mercedez_benz")
                .text("🇩🇪 Opel", "request__brand_opel")
                .row()
                .text("🇩🇪 Porsche", "request__brand_porsche")
                .text("🇩🇪 Smart", "request__brand_smart")
                .row()
                .text("🇩🇪 Trabant", "request__brand_trabant")
                .text("🇩🇪 Volkswagen", "request__brand_volkswagen")
                .text("🇩🇪 Wartburg", "request__brand_wartburg")
                .row()
            
            brandMenu
                .text("🇫🇷 Citroen", "request__brand_citroen")
                .text("🇫🇷 DS", "request__brand_ds")
                .row()
                .text("🇫🇷 Peugeot", "request__brand_peugeot")
                .text("🇫🇷 Renault", "request__brand_renault")
                .row()

            brandMenu
                .text("🇸🇪 Saab", "request__brand_saab")
                .text("🇸🇪 Volvo", "request__brand_volvo")

            brandMenu
                .text("🇳🇴 Think", "request__brand_think")
                .row()

            brandMenu
                .text("🇷🇺 Ambertruck", "request__brand_ambertruck")
                .text("🇷🇺 Lada (ВАЗ)", "request__brand_lada_vaz")
                .text("🇷🇺 Vortex", "request__brand_vortex")
                .row()
                .text("🇷🇺 ГАЗ", "request__brand_gaz")
                .text("🇷🇺 ИЖ", "request__brand_izh")
                .row()
                .text("🇷🇺 Москвич", "request__brand_moskvich")
                .text("🇷🇺 ТагАЗ", "request__brand_tagaz")
                .text("🇷🇺 УАЗ", "request__brand_uaz")
                .row()
            
            brandMenu
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Aston Martin", "request__brand_aston_martin")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Bentley", "request__brand_bentley")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Jaguar", "request__brand_jaguar")
                .row()
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Land Rover", "request__brand_land_rover")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Lotus", "request__brand_lotus")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 MG", "request__brand_mg")
                .row()
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 MINI", "request__brand_mini")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Rolls-Royce", "request__brand_rolls_royce")
                .text("🏴󠁧󠁢󠁥󠁮󠁧󠁿 Rover", "request__brand_rover")
                .row()
            
            brandMenu
                .text("🇮🇹 Abarth", "request__brand_abarth")
                .text("🇮🇹 Alfa Romeo", "request__brand_alfa_romeo")
                .text("🇮🇹 Ferrari", "request__brand_ferrari")
                .row()
                .text("🇮🇹 Fiat", "request__brand_fiat")
                .text("🇮🇹 Lancia", "request__brand_lancia")
                .text("🇮🇹 Maserati", "request__brand_maserati")
                .row()

            brandMenu
                .text("🇪🇸 Cupra", "request__brand_cupra")
                .text("🇪🇸 Santana", "request__brand_santana")
                .text("🇪🇸 SEAT", "request__brand_seat")
                .row()

            brandMenu
                .text("🇨🇿 Skoda", "request__brand_skoda")

            brandMenu
                .text("🇷🇴 Dacia", "request__brand_dacia")

            brandMenu
                .text("🇧🇾 Belgee", "request__brand_belgee")
                .row()

            brandMenu
                .text("🇮🇷 Iran Khodro", "request__brand_iran_khodro")
                .text("🇮🇷 Saipa", "request__brand_saipa")

            break;   
        case "china": 
            brandMenu
                .text("Aito", "request__brand_aito")
                .text("Avatr", "request__brand_avatr")
                .text("BAIC", "request__brand_baic").row()
                .text("BAW", "request__brand_baw")
                .text("Brilliance", "request__brand_brilliance")
                .text("BYD", "request__brand_byd").row()
                .text("Changan", "request__brand_changan")
                .text("Chery", "request__brand_chery")
                .text("Denza", "request__brand_denza").row()
                .text("Dongfeng", "request__brand_dongfeng")
                .text("Dongfeng Honda", "request__brand_dongfeng_honda")
                .text("EXEED", "request__brand_exeed").row()
                .text("FangChengBao", "request__brand_fangchengbao")
                .text("FAW", "request__brand_faw")
                .text("GAC", "request__brand_gac").row()
                .text("Geely", "request__brand_geely")
                .text("Great Wall", "request__brand_great_wall")
                .text("Hafei", "request__brand_hafei").row()
                .text("Haima", "request__brand_haima")
                .text("Haval", "request__brand_haval")
                .text("Hongqi", "request__brand_hongqi").row()
                .text("Hongxing", "request__brand_hongxing")
                .text("Hozon", "request__brand_hozon")
                .text("JAC", "request__brand_jac").row()
                .text("Jetour", "request__brand_jetour")
                .text("Jetta", "request__brand_jetta")
                .text("Jiangling", "request__brand_jiangling").row()
                .text("Jiyue", "request__brand_jiyue")
                .text("Jmev", "request__brand_jmev")
                .text("Kaiyi", "request__brand_kaiyi").row()
                .text("Leapmotor", "request__brand_leapmotor")
                .text("Lifan", "request__brand_lifan")
                .text("Livan", "request__brand_livan").row()
                .text("LiXiang", "request__brand_lixiang")
                .text("Lynk & Co", "request__brand_lynk_and_co")
                .text("M-Hero", "request__brand_m_hero").row()
                .text("Maple", "request__brand_maple")
                .text("Nio", "request__brand_nio")
                .text("Omoda", "request__brand_omoda").row()
                .text("Ora", "request__brand_ora")
                .text("Polar", "request__brand_polar")
                .text("Polestar", "request__brand_polestar").row()
                .text("Roewe", "request__brand_roewe")
                .text("SERES", "request__brand_seres")
                .text("Shenlan", "request__brand_shenlan").row()
                .text("Shineray", "request__brand_shineray")
                .text("Skywell", "request__brand_skywell")
                .text("Skyworth", "request__brand_skyworth").row()
                .text("Tank", "request__brand_tank")
                .text("VGV", "request__brand_vgv")
                .text("Voyah", "request__brand_voyah").row()
                .text("Weltmeister", "request__brand_weltmeister")
                .text("Wey", "request__brand_wey")
                .text("Wuling", "request__brand_wuling").row()
                .text("Xiaomi", "request__brand_xiaomi")
                .text("Xpeng", "request__brand_xpeng")
                .text("Young", "request__brand_young").row()
                .text("Zeekr", "request__brand_zeekr")
                .text("Zotye", "request__brand_zotye")
                .text("ZX", "request__brand_zx")
            
            break; 
        case "asia": 
            brandMenu
                .text("🇰🇷 Daewoo", "request__brand_daewoo")
                .text("🇰🇷 Genesis", "request__brand_genesis")
                .row()
                .text("🇰🇷 Hyundai", "request__brand_hyundai")
                .text("🇰🇷 Kia", "request__brand_kia")
                .row()
                .text("🇰🇷 Renault Samsung", "request__brand_renault_samsung")
                .text("🇰🇷 SsangYong", "request__brand_ssangyong")
                .row()

            brandMenu
                .text("🇯🇵 Acura", "request__brand_acura")
                .text("🇯🇵 Daihatsu", "request__brand_daihatsu")
                .text("🇯🇵 Datsun", "request__brand_datsun")
                .row()
                .text("🇯🇵 Honda", "request__brand_honda")
                .text("🇯🇵 Infiniti", "request__brand_infiniti")
                .text("🇯🇵 Isuzu", "request__brand_isuzu")
                .row()
                .text("🇯🇵 Lexus", "request__brand_lexus")
                .text("🇯🇵 Mazda", "request__brand_mazda")
                .row()
                .text("🇯🇵 Mitsubishi", "request__brand_mitsubishi")
                .text("🇯🇵 Nissan", "request__brand_nissan")
                .text("🇯🇵 Scion", "request__brand_scion")
                .row()
                .text("🇯🇵 Subaru", "request__brand_subaru")
                .text("🇯🇵 Suzuki", "request__brand_suzuki")
                .text("🇯🇵 Toyota", "request__brand_toyota")
                .row()

            brandMenu
                .text("🇺🇿 Ravon", "request__brand_ravon")

            brandMenu
                .text("🇲🇾 Proton", "request__brand_proton")

            brandMenu
                .text("🇮🇳 Tata", "request__brand_tata")
        break; 
    }

    brandMenu.row().text("‹ Изменить регион", "back");

    return brandMenu;
}

export function getModelMenu(brand) {
    let modelMenu = new InlineKeyboard();

    for(let curModel of Object.keys(autoConfig["abarth"])) {
        modelMenu.text(curModel, `request__model_${formatString(curModel)}`).row()
    }

    modelMenu.text("‹ Изменить марку", "back");

    return modelMenu;
}

export function getYearsByModelMenu(model) {
    let yearsMenu = new InlineKeyboard();

    for(let curYear of Object.keys(autoConfig["abarth"]["124 Spider"])) {
        yearsMenu.text(curYear, `request__year_${curYear}`).row()
    }

    yearsMenu.text("‹ Изменить модель", "back");

    return yearsMenu;
}

export function getGensByYearMenu(year) {
    let gensMenu = new InlineKeyboard();

    let genIndex = 0;
    for(let curGen of Object.values(autoConfig["abarth"]["500"][2015])) {
        gensMenu.text(curGen, `request__gen_${genIndex}`).row()
        genIndex++;
    }

    gensMenu.text("‹ Изменить год выпуска", "back");

    return gensMenu;
}

// Параметры 

export function getAutoParamsMenu(param: keyof AutoParams, backwardsText: string) {
    let paramsMenu = new InlineKeyboard();

    for(let curParam of autoParams[param]) {
        paramsMenu.text(translate(curParam), `request__${param}_${curParam}`).row()
    }

    paramsMenu.text(backwardsText, "back");

    return paramsMenu;
}

export function getFirstStageEndMenu() {
    let optionsMenu = new InlineKeyboard();

    optionsMenu.text("Всё верно, идём дальше", "request__second_stage").row()
    // в теории сюда можно добавить кнопки с возвращением на каждый этап, передав весь request
    optionsMenu.text("‹ Назад", "back");

    return optionsMenu;
}