const unitsConsumed = Number(prompt("Enter your Electricity Unit"))

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
    return unitsConsumed * getRatePerUnit(unitsConsumed)
}

function getServiceCharge(electricityBillAmount){
    if (electricityBillAmount >= SERVICE_CHARGE_LIMIT){
        return SERVICE_CHARGE_MAX_AMOUNT
    }else{
        return SERVICE_CHARGE_MIN_AMOUNT
    }
}

function calculateDiscount(bill){
    const discount = bill * (DISCOUNT_PERCENTAGE/100)
    return discount
}

function calculateFinalBill(amount, discount){
    return amount - discount
}

const bill = calculateBill(unitsConsumed)
const serviceChargeBill = getServiceCharge(bill)
const initialAmount = bill + serviceChargeBill
const discountAmount = initialAmount >= DISCOUNT_LIMIT ? calculateDiscount(initialAmount) : 0;
const finalBill = calculateFinalBill(initialAmount, discountAmount)

console.log(`
=========== Electricity Bill ===========

Units Consumed : ${unitsConsumed}

Rate Per Unit  : ₹${getRatePerUnit(unitsConsumed)}

Bill Amount    : ₹${bill}

Service Charge : ₹${serviceChargeBill}

Green Discount : ₹${discountAmount}

Final Bill     : ₹${finalBill}

========================================
    `)