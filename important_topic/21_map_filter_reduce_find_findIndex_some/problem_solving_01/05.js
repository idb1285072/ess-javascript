const categories = [
  {
    id: 1,
    name: "Electronics",
    products: [
      { id: 101, name: "Laptop" },
      { id: 102, name: "Mouse" },
    ],
  },
  {
    id: 2,
    name: "Books",
    products: [{ id: 201, name: "JavaScript" }],
  },
];

const result = categories.reduce((accumulator, category) => {
  const products = category.products.map((product) => ({
    productId: product.id,
    productName: product.name,
    categoryId: category.id,
    categoryName: category.name,
  }));
  accumulator.push(products);
  return accumulator;
}, []);

console.log(result);
