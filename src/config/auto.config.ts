import italy from "./auto/italy";

export default {
    ...italy
} as AutoConfig

type AutoYearConfig = Record<number, string[]>;
type AutoModelConfig = Record<string, AutoYearConfig>;
export type AutoConfig = Record<string, AutoModelConfig>;

export const autoParams = {
    carBody: ["hatchback3", "hatchback5", "sedan", "rodster", "cabriolet"],
    transmission: ["manual", "automatic", "robot"],
    engine: ["electro", "gasoline", "propane-butane", "methane", "diesel"],
    drive: ["rear-wheel", "front-wheel", "all-wheel"],
    condition: ["with-mileage", "emergency-condition", "for-parts"],
    bodyColor: ["white", "purple", "yellow", "green", "brown", "red", "orange", "silver", "grey", "blue", "violet", "black"],
    salonMaterial: ["natural-leather", "artificial-leather", "cloth", "velour", "alcantara", "combo-material"],
    salonColor: ["light", "combo-color", "dark"],
}
