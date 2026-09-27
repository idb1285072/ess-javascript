### 1. Normalize API Users

```javascript
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
```

Transform into:

```javascript
[
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    primaryRole: "admin",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    primaryRole: "user",
  },
];
```

**Constraint:** Do not modify `users`.

---

### 2. Calculate Order Totals

```javascript
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
```

Transform into:

```javascript
[
  {
    id: 101,
    customer: "John",
    total: 2075,
  },
  {
    id: 102,
    customer: "Jane",
    total: 160,
  },
];
```

**Requirement:** Use `map()` for orders. You may use another array method inside it.

---

### 3. Convert Database Records to DTOs

```javascript
const employees = [
  {
    employeeId: 1,
    firstName: "John",
    lastName: "Doe",
    department: {
      id: 10,
      name: "IT",
    },
    salary: 5000,
  },
  {
    employeeId: 2,
    firstName: "Jane",
    lastName: "Smith",
    department: {
      id: 20,
      name: "HR",
    },
    salary: 4500,
  },
];
```

Create:

```javascript
[
  {
    id: 1,
    name: "John Doe",
    departmentId: 10,
    departmentName: "IT",
  },
  {
    id: 2,
    name: "Jane Smith",
    departmentId: 20,
    departmentName: "HR",
  },
];
```

**Challenge:** Salary must not exist in the resulting objects.

---

### 4. Build a Product View Model

```javascript
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
```

Produce:

```javascript
[
  {
    id: 1,
    name: "Laptop",
    originalPrice: 1200,
    finalPrice: 1080,
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Mouse",
    originalPrice: 50,
    finalPrice: 50,
    availability: "Out of Stock",
  },
];
```

---

### 5. Flatten Nested Categories

```javascript
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
```

Create:

```javascript
[
  {
    productId: 101,
    productName: "Laptop",
    categoryId: 1,
    categoryName: "Electronics",
  },
  {
    productId: 102,
    productName: "Mouse",
    categoryId: 1,
    categoryName: "Electronics",
  },
  {
    productId: 201,
    productName: "JavaScript",
    categoryId: 2,
    categoryName: "Books",
  },
];
```

**Important:** You will need to think carefully about `map()` vs `flatMap()`.

---

### 6. Create a Permission Matrix

```javascript
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
```

Produce:

```javascript
[
  {
    id: 1,
    name: "John",
    permissions: ["read", "write", "delete"],
  },
  {
    id: 2,
    name: "Jane",
    permissions: ["read"],
  },
];
```

**Challenge:** A user can have multiple roles. Don't duplicate permissions.

---

### 7. Immutable State Update

Given:

```javascript
const state = {
  users: [
    { id: 1, name: "John", active: false },
    { id: 2, name: "Jane", active: true },
    { id: 3, name: "Mike", active: false },
  ],
};
```

Create a function:

```javascript
activateUser(state, 1);
```

Result:

```javascript
{
  users: [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Jane", active: true },
    { id: 3, name: "Mike", active: false },
  ];
}
```

**Rules:**

- Don't mutate `state`.
- Don't mutate existing user objects.
- Use `map()` to update users.
- Other properties of `state` must remain intact.

---

### 8. Transform Paginated API Response

```javascript
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
```

Transform it into:

```javascript
{
    page: 1,
    pageSize: 2,
    total: 100,
    data: [
        {
            id: 1,
            name: "John Doe",
            orderCount: 5,
            hasOrders: true
        },
        {
            id: 2,
            name: "Jane Smith",
            orderCount: 0,
            hasOrders: false
        }
    ]
}
```

**Constraint:** Preserve pagination metadata without manually rewriting every property.

---

### 9. Multi-Level Transformation

```javascript
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
```

Produce:

```javascript
[
  {
    department: "IT",
    employees: [
      {
        id: 101,
        name: "John",
        skillCount: 2,
        skillsText: "C#, SQL",
      },
      {
        id: 102,
        name: "Jane",
        skillCount: 2,
        skillsText: "Angular, TypeScript",
      },
    ],
  },
  {
    department: "HR",
    employees: [
      {
        id: 201,
        name: "Mike",
        skillCount: 1,
        skillsText: "Recruitment",
      },
    ],
  },
];
```

**Goal:** Use nested `map()` operations cleanly.

---

### 10. Master Challenge — ERP Invoice Transformation

This combines several real-world concepts:

```javascript
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
```

Transform each invoice into:

```javascript
{
    invoiceId: 1001,
    customerName: "ABC Ltd",
    items: [
        {
            product: "Laptop",
            quantity: 2,
            unitPrice: 1000,
            discountAmount: 200,
            lineTotal: 1800
        },
        {
            product: "Mouse",
            quantity: 3,
            unitPrice: 50,
            discountAmount: 0,
            lineTotal: 150
        }
    ],
    subtotal: 1950,
    tax: 292.5,
    grandTotal: 2242.5
}
```

1. Use `map()` for invoice transformation.
2. Use `map()` for invoice items.
3. Use `reduce()` where aggregation is required.
4. Do **not** mutate the original `invoices`.
5. Do not use `for`, `for...of`, or `forEach()`.
6. Avoid unnecessary intermediate arrays.
7. Keep the solution readable and production-quality.
8. Handle empty `items`.
9. Correctly handle `discount: 0`.
10. Round monetary results to **2 decimal places**.
