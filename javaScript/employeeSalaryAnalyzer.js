const employeeSalary = Number(prompt("Enter your Salary: "))
const eligibleForBonus = 30000
const excutiveLevelSalary = 150000

function getSalaryCategory(employeeSalary){
    if (employeeSalary < 20000 && employeeSalary > 0){
        return "Low Salary"
    }else if ( employeeSalary >= 20000 && employeeSalary <= 49999){
        return "Middle Income"
    }else if ( employeeSalary >= 50000 && employeeSalary <= 99999){
        return "High Salary"
    }else if ( employeeSalary >= 100000){
        return "Premium Salary"
    }else {
        return "Invalid Salary"
    }
}

function checkBonusEligibility(employeeSalary){
    return employeeSalary >= eligibleForBonus ? "Eligible" : "Not Eligible"
}

function getTaxCategory(employeeSalary){
    if (employeeSalary < 25000 && employeeSalary > 0){
        return "No Tax"
    }else if ( employeeSalary >= 25000 && employeeSalary <= 74999){
        return "10% Tax"
    }else if ( employeeSalary >= 75000){
        return "20% Tax"
    }else {
        return "Invalid Salary"
    }
}

console.log("=========== Salary Report ===========")
console.log(`Monthly Salary : ${employeeSalary}`)
console.log(`Salary Category : ${getSalaryCategory(employeeSalary)}`)
console.log(`Bonus : ${checkBonusEligibility(employeeSalary)}`)
console.log(`Tax : ${getTaxCategory(employeeSalary)}`)
if (employeeSalary >= excutiveLevelSalary){
    console.log("Executive Level Employee")
}
console.log("=====================================")