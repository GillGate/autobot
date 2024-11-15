export default {
    mileage: /^[0-9]{1,5}$/,
    powerReserve: /^[0-9]{1,4}$/,
    fuelCapacity: /^[0-9]{1,3}$/,
    vin: /^[A-HJ-NPR-Z0-9]{17}$/,
    modification: /^\d,\d\s[A-Z]{2,}\s+\w+\s+\d+\sл\.с\.$/,
    price: /^[0-9]{1,9}$/,
    phone: /\+\d{10,15}/,
}