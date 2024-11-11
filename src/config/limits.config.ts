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
    }
} as Record<string, LimitOption>

interface LimitOption {
    min: number,
    max: number
} 