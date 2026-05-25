employee_record = []

def add_employee():
    while True:
        employee_id = int(input("Enter Employee Id: "))
        employee_name = input("Enter Employee Name: ")
        employee_salary = int(input("Enter Employee Salary: "))
        if find_employee_by_id(employee_id) == None and employee_salary>=0:
            employee_record.append({'id':employee_id,'name':employee_name,'salary':employee_salary})
            break
        else:
            print("Employee id should be unique and salary should not be in negative")

def show_employee():
    for employee in employee_record:
        print("Employee Id : {}".format(employee['id']))
        print("Employee Name : {}".format(employee['name']))
        print("Employee Salary : {}".format(employee['salary']))

def search_employee():
    employee_id = int(input("Enter Employee Id: "))
    employee = find_employee_by_id(employee_id)
    print(employee[1])

def update_salary():
    employee_id = int(input("Enter Employee Id to update employee salary: "))
    employee_detail = find_employee_by_id(employee_id)
    new_salary = int(input("Enter Employee New Salary: "))
    employee_record[employee_detail[0]]['salary'] = new_salary

def delete_employee():
    employee_id = int(input("Enter Employee Id to delete: "))
    employee_detail = find_employee_by_id(employee_id)
    del employee_record[employee_detail[0]]

def find_employee_by_id(employee_id):
    for i, employee in enumerate(employee_record):
        if employee['id'] == employee_id:
            return i,employee


while True:
    print(f"""1.Add Employee
2.Show Employee
3.Search Employee
4.Update Salary
5.Delete Employee
6.Exit""")
    
    user_choice = int(input("What did you need to do: "))

    if user_choice == 1:
        add_employee()
    elif user_choice == 2:
        show_employee()
    elif user_choice == 3:
        search_employee()
    elif user_choice == 4:
        update_salary()
    elif user_choice == 5:
        delete_employee()
    elif user_choice == 6:
        break
    else:
        print("Enter a vaild choice from menu")



    
    