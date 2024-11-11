import { AutoParams } from "./auto.config";

export default {
    request: {},
    conversation: {},
    routeHistory: [],
    lastMsgId: 0,
    temp: {},
    user: {}
} as SessionData

export interface SessionData {
    request: Request,
    conversation: Record<any, any>,
    routeHistory: Array<any>,
    lastMsgId: number,
    temp: Record<any, any>,
    user: Record<any, any>,
}

export interface Request  {
    region: string,
    brand: string,
    model: string,
    year: string,
    gen: string,

    carbody: string
    trans: string
    engine: string
    drive: string
    condition: string
    bodycolor: string
    salonmaterial: string
    saloncolor: string
    exchange: boolean

    mileage: number,
    reserve?: number,
    vin: string,
    modification: string,
    price: number,
    phone: string
};