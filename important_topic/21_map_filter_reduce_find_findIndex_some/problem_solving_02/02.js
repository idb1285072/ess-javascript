const orders = [
  {
    id: 101,
    customer: "John",
    status: "completed",
    items: [
      { product: "Laptop", price: 1000, quantity: 1 },
      { product: "Mouse", price: 50, quantity: 2 },
    ],
  },
  {
    id: 102,
    customer: "Jane",
    status: "cancelled",
    items: [{ product: "Keyboard", price: 100, quantity: 1 }],
  },
  {
    id: 103,
    customer: "Mike",
    status: "completed",
    items: [{ product: "Monitor", price: 300, quantity: 2 }],
  },
];

const result = orders
  .filter((order) => order.status === "completed")
  .map((order) => ({
    orderId: order.id,
    customer: order.customer,
    total: order.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  }));

const result2 = result.reduce(
  (accumulator, order) => {
    accumulator.orderCount++;
    accumulator.totalRevenue += order.total;
    accumulator.averageOrderValue =
      accumulator.totalRevenue / accumulator.orderCount;
    return accumulator;
  },
  { orderCount: 0, totalRevenue: 0, averageOrderValue: 0 },
);

console.log(result2);
