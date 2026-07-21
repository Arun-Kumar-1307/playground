const shopName = prompt("Enter you shop name: ")
const ownerName = prompt("Enter you owner name: ")
const shopAge = Number(prompt("Enter you shop age: "))
const phoneNumber = Number(prompt("Enter you phone number: "))
const email = prompt("Enter you email: ")
const isRegistered = prompt("Did shop is registered (Yes / No): ")
const monthlyRevenue = Number(prompt("Enter Monthly Revenue: "))
let isValidated = inputValidation()

const MIN_SHOP_AGE = 2
const MIN_INCOME_FOR_APPROVE = 500000
const MIN_INCOME_FOR_TRUSTED_SELLER =500000

function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

function validatePhoneNumber(number) {
    return String(number).length === 10;
}

function validateShopAge(age) {
    return age >= 1;
}

function validateGst(registration) {
    return registration.toLowerCase() === "yes";
}

function validateRevenue(revenue) {
    return revenue >= 0;
}

function validateEmptyVariables(variable) {
    return variable != null && variable.trim() !== "";
}

function inputValidation(){
    return (
        validateEmail(email) === true &&
        validatePhoneNumber(phoneNumber) === true &&
        validateEmptyVariables(shopName) === true &&
        validateEmptyVariables(ownerName) === true &&
        validateShopAge(shopAge)
    )
}

function isShopApproved(){
    if (isValidated){
        return shopAge >= MIN_SHOP_AGE && monthlyRevenue >= MIN_INCOME_FOR_APPROVE
    }
}

function isTrustedSeller(){
    if(isValidated){
        return monthlyRevenue >= MIN_INCOME_FOR_TRUSTED_SELLER && validateGst(isRegistered)
    }
}

if(isValidated){
    console.log(`
========== LOCALHUB SHOP REPORT ==========

Shop Name        : ${shopName}
Owner            : ${ownerName}
Shop Age         : ${shopAge} years
Phone            : ${phoneNumber}
Email            : ${email}
GST              : ${isRegistered}
Revenue          : ₹${monthlyRevenue}

Approved         : ${isShopApproved() ? "Yes" : "No"}
Trusted Seller   : ${isTrustedSeller() ? "Yes" : "No"}

==========================================
`)
}else{
    console.log("Enter Valid Details")
}