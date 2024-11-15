export default {
    mileage: {
        min: 0,
        max: 99999
    },
    powerReserve: {
        min: 0,
        max: 9999
    },
    modification: {
        min: 6,
        max: 36
    },
    price: {
        min: 10,
        max: 999999999
    },
    gallery: {
        maxLength: 10,
        maxBytes: 2000000 // 20 Mb
        // maxBytes: 20000000 // 20 Mb
    }
} as LimitsConfig

interface LimitOption {
    min: number,
    max: number
} 
export interface LimitsConfig {
    mileage: LimitOption
    powerReserve: LimitOption
    modification: LimitOption
    price: LimitOption
    gallery: {
        maxLength: number
        maxBytes: number
    }
}