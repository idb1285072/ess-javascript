const employees = [
  {
    employeeId: 1,
    firstName: "John",
    lastName: "Doe",
    department: {
      id: 10,
      name: "IT",
    },
    salary: 5000,
  },
  {
    employeeId: 2,
    firstName: "Jane",
    lastName: "Smith",
    department: {
      id: 20,
      name: "HR",
    },
    salary: 4500,
  },
];

const result = employees.map((employee) => ({
  id: employee.employeeId,
  name: `${employee.firstName.trim()} ${employee.lastName.trim()}`,
  departmentId: employee.department.id,
  departmentName: employee.department.name,
}));

console.log(result);
