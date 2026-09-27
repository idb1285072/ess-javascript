const users = [
  {
    id: 1,
    firstName: " John ",
    lastName: "Doe",
    email: "JOHN@EXAMPLE.COM",
    roles: ["admin", "user"],
  },
  {
    id: 2,
    firstName: " Jane",
    lastName: "Smith ",
    email: "JANE@EXAMPLE.COM",
    roles: ["user"],
  },
];

const transformedUsers = users.map((user) => {
  return {
    id: user.id,
    fullName: `${user.firstName.trim()} ${user.lastName.trim()}`,
    email: user.email.toLowerCase(),
    primaryRole: user.roles[0],
  };
});

console.log(transformedUsers);
