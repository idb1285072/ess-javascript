const departments = [
  {
    id: 1,
    name: "IT",
    employees: [
      {
        id: 101,
        name: "John",
        skills: ["C#", "SQL"],
      },
      {
        id: 102,
        name: "Jane",
        skills: ["Angular", "TypeScript"],
      },
    ],
  },
  {
    id: 2,
    name: "HR",
    employees: [
      {
        id: 201,
        name: "Mike",
        skills: ["Recruitment"],
      },
    ],
  },
];

const result = departments.map((department) => ({
  department: department.name,
  employees: department.employees.map((employee) => ({
    id: employee.id,
    name: employee.name,
    skillCount: employee.skills.length,
    skillsText: employee.skills.toString(),
  })),
}));

console.log(result[0].employees)