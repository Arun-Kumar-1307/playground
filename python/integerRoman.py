symbol = ['M','D','C','L','X','V','I']
value = [1000,500,100,50,10,5,1]

num = int(input("Enter a number: "))
result = ""

for i, v in enumerate(value):

    count = num // v
    result += symbol[i] * count
    num %= v

    if i % 2 == 0 and i + 2 < len(value):
        if num >= (v - value[i + 2]):
            result += symbol[i + 2] + symbol[i]
            num -= (v - value[i + 2])

    if i % 2 == 1 and i + 1 < len(value):
        if num >= (v - value[i + 1]):
            result += symbol[i + 1] + symbol[i]
            num -= (v - value[i + 1])

print(result)
print("end")