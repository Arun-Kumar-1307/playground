student_record = []

def collect_students():
    
    while True:
        student_name = input("Enter student name: ")
        student_mark = int(input("Enter student mark: "))
        
        if student_mark <= 100:
            student_record.append({'name': student_name , 'mark': student_mark})
            break
        else:
            print("Mark should be less than or equal to hundred")
            

def display_students():
    for i in range (len(student_record)):
        print("name of the student {}: {}" .format(i+1,student_record[i]['name']))


def find_topper():
    highest_mark = -1
    topper_student = ""

    for i in range(len(student_record)):
        mark = student_record[i]['mark']   

        if mark > highest_mark:  
            highest_mark = mark
            topper_student = student_record[i]['name']

    print(topper_student)
        
    
def find_failed_students():
    lowest_mark = 50
    failed_students_record = []
    for i in range(len(student_record)):
        mark = student_record[i]['mark']
        if mark <= lowest_mark:
            failed_students_record.append(student_record[i]['name'])
    for num,student in enumerate(failed_students_record):
        print("{}. {}".format(num+1,student))





while True:
    print("""
1. Add Student
2. Show Students
3. Show Topper
4. Show Failed Students
5. Exit
""")
    user_choice = input("choose a choice from this menu: ")
    if user_choice == '1':
        collect_students()
    elif user_choice == '2':
        display_students()
    elif user_choice == '3':
        find_topper()
    elif user_choice == '4':
        find_failed_students()
    elif user_choice == '5':
        break
    else:
        print("Enter a vaild choice from menu")
