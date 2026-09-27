const invoices = [
  {
    id: 1001,
    customer: {
      id: 1,
      name: "ABC Ltd",
    },
    items: [
      { product: "Laptop", price: 1000, quantity: 2, discount: 10 },
      { product: "Mouse", price: 50, quantity: 3, discount: 0 },
    ],
    taxRate: 15,
  },
  {
    id: 1002,
    customer: {
      id: 2,
      name: "XYZ Ltd",
    },
    items: [{ product: "Keyboard", price: 100, quantity: 2, discount: 5 }],
    taxRate: 10,
  },
];

const result = invoices.map((invoice) => {
  const subTotal = invoice.items.reduce((total, item) => {
    total +=
      item.price * item.quantity -
      (item.price * item.quantity * item.discount) / 100;
    return total;
  }, 0);
  return {
    invoiceId: invoice.id,
    customerName: invoice.customer.name,
    items: invoice.items.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      unitPrice: item.price,
      discountAmount: (item.quantity * item.price * item.discount) / 100,
      lineTotal:
        item.quantity * item.price -
        (item.quantity * item.price * item.discount) / 100,
    })),
    subTotal: subTotal,
    tax: (subTotal * invoice.taxRate) / 100,
    grandTotal: subTotal + (subTotal * invoice.taxRate) / 100,
  };
});

console.log(result);
