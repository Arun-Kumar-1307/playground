import os
import json

fileName = "EmployeeRecord.json"

def add_employee():
    while True:
        employee = readFile()
        employee_id = int(input("Enter Employee Id: "))
        employee_name = input("Enter Employee Name: ")
        employee_salary = int(input("Enter Employee Salary: "))
        if find_employee_by_id(employee_id) == None and employee_salary>=0:
            employee.append({'id':employee_id,'name':employee_name,'salary':employee_salary})
            writeFile(employee)
            break
        else:
            print("Employee id should be unique and salary should not be in negative")

def show_employee():
    employee = readFile()
    if len(employee) == 0:
        print("No record")
    else:
        for person in employee:
            print("""============================
Employee ID = {}
Employee Name ={}
Employee Salary = {}
============================""".format(person['id'],person['name'],person['salary']))
        

def search_employee():
    employee_id = int(input("Enter Employee Id: "))
    employee = find_employee_by_id(employee_id)
    print("""============================
Employee ID = {}
Employee Name ={}
Employee Salary = {}
============================""".format(employee['id'],employee['name'],employee['salary']))

def update_salary():
    employees = readFile()
    employee_id = int(input("Enter Employee Id to update employee salary: "))
    new_salary = int(input("Enter Employee New Salary: "))
    for employee in employees:
        if employee['id'] == employee_id:
            employee['salary'] = new_salary
            break
    writeFile(employees)

def delete_employee():
    employees = readFile()
    employee_id = int(input("Enter Employee Id to delete: "))
    employees = [emp  for emp in employees if emp['id'] !=employee_id]
    writeFile(employees)
    

def find_employee_by_id(employee_id):
    employees = readFile()
    for employee in employees:
        if employee['id'] == employee_id:
            return employee
        

def getEmployeeRecordJsonFile():
    if not os.path.exists(fileName):
        with open(fileName,'w') as file:
            json.dump([],file,indent=4)

def readFile():
    with open(fileName,'r') as file:
        return json.load(file)

def writeFile(data):
    with open(fileName,'w') as file:
        json.dump(data, file, indent=4)

while True:
    getEmployeeRecordJsonFile()
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



    
    