const state = {
  users: [
    { id: 1, name: "John", active: false },
    { id: 2, name: "Jane", active: true },
    { id: 3, name: "Mike", active: false },
  ],
};

const activateUser = (state, id) => {
  const result = state.users.map((user) => ({
    ...user,
    active: user.id === id ? true : user.active,
  }));
  console.log(result);
};

activateUser(state, 1);

