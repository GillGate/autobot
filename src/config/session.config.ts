import { Request } from "./auto.config";

export default {
    request: {
        params: {},
        gallery: []
    },
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