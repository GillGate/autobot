import europe from "./auto/europe";
import america from "./auto/america";

export default {
    // ...italy,
    ...america,
    ...europe,
    // america: {
        
    // },
    // europe: {
        
    // },
    // china: {

    // },
    // asia: {

    // }
};

export const autoParams: AutoParams = {
    carbody: [
        "offroad3",
        "offroad5",
        "cabriolet",
        "coupe",
        "passvan",
        "limousine",
        "liftback",
        "minivan",
        "pickup",
        "rodster",
        "sedan",
        "universal",
        "hatchback3",
        "hatchback5",
        "other",
    ],
    trans: ["manual", "automatic", "robot", "variator"],
    engine: [
        "gasoline",
        "propane-butane",
        "methane",
        "gasoline-hybrid",
        "diesel",
        "diesel-hybrid",
        "electro",
    ],
    drive: ["rear-wheel", "front-wheel", "plug-in-all-wheel", "all-wheel"],
    condition: ["with-mileage", "emergency-condition", "for-parts"],
    bodycolor: [
        "white",
        "purple",
        "yellow",
        "green",
        "brown",
        "red",
        "orange",
        "silver",
        "grey",
        "blue",
        "violet",
        "black",
    ],
    salonmaterial: [
        "natural-leather",
        "artificial-leather",
        "cloth",
        "velour",
        "alcantara",
        "combo-material",
    ],
    saloncolor: ["light", "combo-color", "dark"],
    exchange: ["not-interested", "any-option", "with-pay-buyer", "with-pay-seller"],
};

export type AutoParams = {
    [K in keyof RequestParams]: string[];
    // [K in keyof AutoParams]: AutoParams[K] extends any[] ? AutoParams[K] : AutoParams[K][]; // если вдруг появится другой тип
};

export const autoParamsSteps: AutoParamsStep[] = [
    {
        step: "gen",
        backwardsText: "‹ Изменить поколение",
        nextStep: "carbody",
        nextStepText: "Выберите кузов машины:",
    },
    {
        step: "carbody",
        backwardsText: "‹ Изменить кузов",
        nextStep: "trans",
        nextStepText: "Выберите коробку передач:",
    },
    {
        step: "trans",
        backwardsText: "‹ Изменить коробку передач",
        nextStep: "engine",
        nextStepText: "Выберите тип двигателя:",
    },
    {
        step: "engine",
        backwardsText: "‹ Изменить тип двигателя",
        nextStep: "drive",
        nextStepText: "Выберите тип привода:",
    },
    {
        step: "drive",
        backwardsText: "‹ Изменить тип привода",
        nextStep: "condition",
        nextStepText: "Укажите состояние вашей машины:",
    },
    {
        step: "condition",
        backwardsText: "‹ Выбрать другое состояние",
        nextStep: "bodycolor",
        nextStepText: "Укажите цвет кузова:",
    },
    {
        step: "bodycolor",
        backwardsText: "‹ Изменить цвет кузова",
        nextStep: "salonmaterial",
        nextStepText: "Выберите материал салона:",
    },
    {
        step: "salonmaterial",
        backwardsText: "‹ Изменить материал салона",
        nextStep: "saloncolor",
        nextStepText: "Выберите цвет салона:",
    },
    {
        step: "saloncolor",
        backwardsText: "‹ Изменить цвет салона",
        nextStep: "exchange",
        nextStepText: "Машина на обмен?",
    },
];

export interface AutoParamsStep {
    step: keyof AutoParams | "gen";
    backwardsText: string;
    nextStep: keyof AutoParams;
    nextStepText: string;
}

interface BaseRequest  {
    region: string,
    brand: string,
    model: string,
    year: string,
    gen: string,
    params: RequestParams
    mileage: number,
    vin: string,
    modification: string,
    price: number,
    phone: string,
    gallery: any[]
};

export interface RequestParams {
    carbody: string
    trans: string
    engine: string
    drive: string
    condition: string
    bodycolor: string
    salonmaterial: string
    saloncolor: string
    exchange: string
}

interface ElectroRequest extends BaseRequest {
    reserve: number,
    capacity: never,
}

interface FuelRequest extends BaseRequest {
    capacity: null | number,
    reserve: never,
}

export type Request = ElectroRequest | FuelRequest;