const enteredNumber = Number(prompt("Enter a Number:"));

console.log("========== Number Analysis ==========")
console.log("Input Number :" + enteredNumber)

isOddOrEven(enteredNumber)
isDivisibleByFive(enteredNumber)
isPositive(enteredNumber)
console.log("=====================================")
function isOddOrEven(number){
    if (number % 2 === 0 ){
        console.log("Even Number")
    }else {
        console.log("Odd Number")
    }
}

function isDivisibleByFive(number){
    if (number % 5 === 0){
        console.log("The number is Divisible by 5")
    }else {
        console.log("The number is not Divisible by 5")
    }
}

function isPositive(number){
    if (number >= 0){
        console.log("Positive Number")
    }else{
        console.log("Negative Number")
    }
}