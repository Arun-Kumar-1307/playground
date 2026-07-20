const studentName = prompt("Enter your Name: ")
const age = Number(prompt("Enter your Age: "))
const percentage = Number(prompt("Enter your percentage: "))
const familyIncome = Number(prompt("Enter your family Income: "))

const MIN_PERCENTAGE =75
const MAX_PERCENTAGE =100
const MAX_INCOME = 500000
const MAX_FAMILY_SALARY = 200000

if(checkEligibility()){
    console.log(`
========== Scholarship Report ==========

Student Name      : ${studentName}
Age               : ${age}
Percentage        : ${percentage}%
Family Income     : ₹${familyIncome}

Eligible          : ${checkEligibility() ? "Yes" : "No"}

Scholarship Type  : ${checkScholarshipType()}

Badge             : ${checkEligibleBadge() ? "🏆 Outstanding Scholar" : "No Special Badge"}

========================================
`)
}else{
    console.log("Not Eligible")
}


function checkEligibility(){
    if(age >= 17 && age <= 25){
        if (percentage >= MIN_PERCENTAGE && percentage <= MAX_PERCENTAGE){
            if (familyIncome <= MAX_INCOME){
                return true
            }
        }
    }else{
        return false
    }
}

function checkScholarshipType(){
    if (checkEligibility()){
        if (percentage >= 75 && percentage <= 84){
            return "Bronze Scholarship"
        }
        else if (percentage >= 85 && percentage <= 94){
            return "Silver Scholarship"
        }
        else if (percentage >= 95 && percentage <= 100){
            return "Gold Scholarship"
        }
    }
    else{
        return "Not Eligible"
    }
}

function checkEligibleBadge(){
    if (checkEligibility()){
        if (percentage === MAX_PERCENTAGE && familyIncome <= MAX_FAMILY_SALARY){
            return true
        }
    }
    return false
}