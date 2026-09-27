const orders = [
  {
    id: 101,
    customer: "John",
    items: [
      { name: "Laptop", price: 1000, quantity: 2 },
      { name: "Mouse", price: 25, quantity: 3 },
    ],
  },
  {
    id: 102,
    customer: "Jane",
    items: [{ name: "Keyboard", price: 80, quantity: 2 }],
  },
];

const result = orders.map((order) => ({
  id: order.id,
  customer: order.customer,
  total: order.items.reduce((total, item) => {
   total +=  item.price * item.quantity;
   return total;
  }, 0),
}));

console.log(result);
