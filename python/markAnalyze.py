student_name = input("Enter student Name: ")
subject_number = int(input("Enter the subject count: "))
total = 0 
highest_mark = -1
lowest_mark = 101

for i in range(1, subject_number + 1):
    while True:
        mark = int(input("Enter the subject {} mark: ".format(i)))
        if 0 <= mark <= 100:
            total += mark

            if mark > highest_mark:
                highest_mark = mark

            if mark < lowest_mark:
                lowest_mark = mark
            break
            
        else:
            print("Please enter marks between 0 and 100")

    

average = total//subject_number

if average >= 90:
    print("your average is {} and you get Grade A".format(average))

elif average >=75:
    print("your average is {} and you get Grade B".format(average))

elif average >=50:
    print("your average is {} and you get Grade C".format(average))

else:
    print("your average is {} and you get Failed".format(average))

print("Highest mark is {}".format(highest_mark))
print("Lowest mark is {}".format(lowest_mark))