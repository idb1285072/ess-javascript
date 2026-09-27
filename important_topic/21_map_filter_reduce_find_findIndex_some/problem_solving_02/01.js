const employees = [
  { id: 1, name: "John", department: "IT", salary: 6000, active: true },
  { id: 2, name: "Jane", department: "HR", salary: 4500, active: true },
  { id: 3, name: "Mike", department: "IT", salary: 7500, active: false },
  { id: 4, name: "Sarah", department: "Finance", salary: 8000, active: true },
  { id: 5, name: "David", department: "IT", salary: 5000, active: true },
];

const result = employees
  .filter((employee) => employee.department === "IT" && employee.active)
  .map((employee) => ({
    id: employee.id,
    name: employee.name,
    salary: employee.salary,
  }));


const employeeStatistic = result.reduce((accumulator, employee)=>{
  accumulator.totalSalary += employee.salary;
  accumulator.employeeCount++;
  return accumulator;
}, {employeeCount: 0, totalSalary: 0, averageSalary: 0})

employeeStatistic.averageSalary = employeeStatistic.totalSalary/employeeStatistic.employeeCount;

console.log(employeeStatistic);
