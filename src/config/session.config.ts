export default {
    request: {
        region: null,
        brand: null,
    },
    conversation: {},
    routeHistory: [],
    lastMsgId: 0,
    temp: {},
    user: {}
} as SessionData

export interface SessionData {
    request: {
        region: string,
        brand: string,
        model: string,
        year: number | string,
        genIndex: number | string,
        carBody: string,
        trans: string
    },
    conversation: Record<any, any>,
    routeHistory: Array<any>,
    lastMsgId: number,
    temp: Record<any, any>,
    user: Record<any, any>,
}