const unitsConsumed = Number(prompt("Enter your Electricity Unit"))

var electricityBillAmount = 0

const SERVICE_CHARGE_LIMIT = 500
const SERVICE_CHARGE_MIN_AMOUNT = 50
const SERVICE_CHARGE_MAX_AMOUNT = 100
const DISCOUNT_LIMIT =1000
const DISCOUNT_PERCENTAGE = 10

function getRatePerUnit(unitsConsumed) {
    if (unitsConsumed > 0 && unitsConsumed <= 100) {
        return 2;
    } else if (unitsConsumed <= 200) {
        return 3;
    } else if (unitsConsumed <= 300) {
        return 5;
    } else {
        return 7;
    }
}

function calculateBill(unitsConsumed){
    electricityBillAmount = unitsConsumed * getRatePerUnit(unitsConsumed)
}

function getServiceCharge(electricityBillAmount){
    if (electricityBillAmount >= SERVICE_CHARGE_LIMIT){
        electricityBillAmount += SERVICE_CHARGE_MAX_AMOUNT
        return SERVICE_CHARGE_MAX_AMOUNT
    }else{
        electricityBillAmount += SERVICE_CHARGE_MIN_AMOUNT
        return SERVICE_CHARGE_MIN_AMOUNT
    }
}

function calculateDiscount(tempElectricityBillAmount){
    const discount = tempElectricityBillAmount * (DISCOUNT_PERCENTAGE/100)
    electricityBillAmount = tempElectricityBillAmount - discount
    return discount
}

calculateBill(unitsConsumed)

console.log(`
=========== Electricity Bill ===========

Units Consumed : ${unitsConsumed}

Rate Per Unit  : ₹${getRatePerUnit(unitsConsumed)}

Bill Amount    : ₹${electricityBillAmount}

Service Charge : ₹${getServiceCharge(electricityBillAmount)}

Green Discount : ₹${ (electricityBillAmount >= DISCOUNT_LIMIT ? calculateDiscount(electricityBillAmount) : 0)}

Final Bill     : ₹${electricityBillAmount}

========================================
    `)