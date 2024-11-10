import italy from "./auto/italy";

export default {
    ...italy,
} as AutoConfig;

type AutoYearConfig = Record<number, string[]>;
type AutoModelConfig = Record<string, AutoYearConfig>;
export type AutoConfig = Record<string, AutoModelConfig>;

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
    exchange: ["yes", "no"],
};

export interface AutoParams {
    gen?: string;
    carbody: string[];
    trans: string[];
    engine: string[];
    drive: string[];
    condition: string[];
    bodycolor: string[];
    salonmaterial: string[];
    saloncolor: string[];
    exchange: string[];
}

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
    step: keyof AutoParams;
    backwardsText: string;
    nextStep: keyof AutoParams;
    nextStepText: string;
}
