const users = [
  {
    id: 1,
    name: "John",
    roles: ["admin", "editor"],
  },
  {
    id: 2,
    name: "Jane",
    roles: ["viewer"],
  },
];

const rolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};

const result = users.map((user) => ({
  id: user.id,
  name: user.name,
  permissions: Object.values(
    user.roles.reduce((accumulator, role) => {
      return {
        ...accumulator,
        ...rolePermissions[role],
      };
    }, {}),
  ),
}));

console.log(result);
