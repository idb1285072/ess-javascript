const response = {
  page: 1,
  pageSize: 2,
  total: 100,
  data: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      orders: 5,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      orders: 0,
    },
  ],
};

const result = {
  ...response,
  data: response.data.map((user) => ({
    id: user.id,
    name: `${user.firstName.trim()} ${user.lastName.trim()}`,
    orderCount: user.orders,
    hasOrder: user.orders > 0,
  })),
};

console.log(result);
