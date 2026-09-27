const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    discount: 10,
    stock: 5,
  },
  {
    id: 2,
    name: "Mouse",
    price: 50,
    discount: 0,
    stock: 0,
  },
];

const result = products.map((product) => ({
  id: product.id,
  name: product.name,
  originalPrice: product.price,
  finalPrice: product.price - (product.discount * product.price) / 100,
  availability: product.stock > 0 ? "In Stock" : "Out of Stock",
}));

console.log(result);
