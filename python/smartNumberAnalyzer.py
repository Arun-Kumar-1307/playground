num = int(input("Enter a number: "))

def numberSignAnalyzer(n):
    if (n == 0):
        print("Number is Zero")
    elif (n < 0):
        print("Negative Number")
    else:
        print("Positive Number")

def isOverOrEven(n):
    if (n % 2 == 0):
        print("Even Number")
    else:
        print("Odd Number")

def isDivisibleByFive(n):
    if(n % 5 == 0):
        print("Divisible by 5")
    else:
        print("Not Divisible by 5")

numberSignAnalyzer(num)
isOverOrEven(num)
isDivisibleByFive(num)