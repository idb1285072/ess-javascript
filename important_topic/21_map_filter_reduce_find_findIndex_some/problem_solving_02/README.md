Below are **10 master-level JavaScript challenges** focused specifically on combining **`map()` + `filter()` + `reduce()`**.

### Rules

For all challenges:

* Prefer `map()`, `filter()`, and `reduce()`.
* No `for`, `for...of`, or `forEach()`.
* Don't mutate the original data.
* Use clean, production-quality JavaScript.
* Don't use external libraries.
* Some challenges intentionally require **chaining** and others require **nested transformations**.

---

## 1. Employee Salary Report

```javascript
const employees = [
    { id: 1, name: "John", department: "IT", salary: 6000, active: true },
    { id: 2, name: "Jane", department: "HR", salary: 4500, active: true },
    { id: 3, name: "Mike", department: "IT", salary: 7500, active: false },
    { id: 4, name: "Sarah", department: "Finance", salary: 8000, active: true },
    { id: 5, name: "David", department: "IT", salary: 5000, active: true }
];
```

Create a report containing **only active IT employees**.

Expected:

```javascript
[
    {
        id: 1,
        name: "John",
        salary: 6000
    },
    {
        id: 5,
        name: "David",
        salary: 5000
    }
]
```

Then calculate:

```javascript
{
    employeeCount: 2,
    totalSalary: 11000,
    averageSalary: 5500
}
```

**Requirements:**

* `filter()` → active IT employees
* `map()` → DTO
* `reduce()` → salary statistics

---

# 2. E-Commerce Order Analytics

```javascript
const orders = [
    {
        id: 101,
        customer: "John",
        status: "completed",
        items: [
            { product: "Laptop", price: 1000, quantity: 1 },
            { product: "Mouse", price: 50, quantity: 2 }
        ]
    },
    {
        id: 102,
        customer: "Jane",
        status: "cancelled",
        items: [
            { product: "Keyboard", price: 100, quantity: 1 }
        ]
    },
    {
        id: 103,
        customer: "Mike",
        status: "completed",
        items: [
            { product: "Monitor", price: 300, quantity: 2 }
        ]
    }
];
```

Find all completed orders and calculate:

```javascript
{
    orderCount: 2,
    totalRevenue: 1700,
    averageOrderValue: 850
}
```

Also produce:

```javascript
[
    {
        orderId: 101,
        customer: "John",
        total: 1100
    },
    {
        orderId: 103,
        customer: "Mike",
        total: 600
    }
]
```

**Key challenge:** `reduce()` inside `map()` + outer `reduce()`.

---

# 3. Product Inventory Analysis

```javascript
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 50, stock: 0 },
    { id: 3, name: "Desk", category: "Furniture", price: 300, stock: 10 },
    { id: 4, name: "Chair", category: "Furniture", price: 150, stock: 3 },
    { id: 5, name: "Monitor", category: "Electronics", price: 400, stock: 0 }
];
```

Find all **in-stock products** and calculate the total inventory value:

```text
inventory value = price × stock
```

Expected:

```javascript
{
    products: [
        {
            id: 1,
            name: "Laptop",
            inventoryValue: 5000
        },
        {
            id: 3,
            name: "Desk",
            inventoryValue: 3000
        },
        {
            id: 4,
            name: "Chair",
            inventoryValue: 450
        }
    ],
    totalInventoryValue: 8450
}
```

---

# 4. Department Statistics

```javascript
const employees = [
    { name: "John", department: "IT", salary: 6000 },
    { name: "Jane", department: "HR", salary: 5000 },
    { name: "Mike", department: "IT", salary: 7000 },
    { name: "Sarah", department: "Finance", salary: 8000 },
    { name: "David", department: "IT", salary: 5500 },
    { name: "Lisa", department: "HR", salary: 4500 }
];
```

Create:

```javascript
[
    {
        department: "IT",
        employeeCount: 3,
        totalSalary: 18500,
        averageSalary: 6166.67
    },
    {
        department: "HR",
        employeeCount: 2,
        totalSalary: 9500,
        averageSalary: 4750
    },
    {
        department: "Finance",
        employeeCount: 1,
        totalSalary: 8000,
        averageSalary: 8000
    }
]
```

### Constraints

You cannot manually specify department names.

You must derive them from the data.

**Hint:** Think about how `reduce()` can build an object grouped by department.

---

# 5. Customer Purchase Ranking

```javascript
const customers = [
    {
        id: 1,
        name: "John",
        orders: [
            { amount: 500, status: "completed" },
            { amount: 300, status: "completed" },
            { amount: 200, status: "cancelled" }
        ]
    },
    {
        id: 2,
        name: "Jane",
        orders: [
            { amount: 1000, status: "completed" }
        ]
    },
    {
        id: 3,
        name: "Mike",
        orders: [
            { amount: 200, status: "cancelled" },
            { amount: 400, status: "completed" }
        ]
    }
];
```

Generate:

```javascript
[
    {
        id: 1,
        name: "John",
        totalSpent: 800
    },
    {
        id: 2,
        name: "Jane",
        totalSpent: 1000
    },
    {
        id: 3,
        name: "Mike",
        totalSpent: 400
    }
]
```

Then find:

```javascript
{
    customerId: 2,
    customerName: "Jane",
    totalSpent: 1000
}
```

**Important:** Cancelled orders must not contribute to spending.

---

# 6. Permission System

```javascript
const users = [
    {
        id: 1,
        name: "John",
        active: true,
        roles: ["admin", "editor"]
    },
    {
        id: 2,
        name: "Jane",
        active: true,
        roles: ["viewer"]
    },
    {
        id: 3,
        name: "Mike",
        active: false,
        roles: ["admin"]
    }
];

const rolePermissions = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"]
};
```

Create a list of active users with unique permissions:

```javascript
[
    {
        id: 1,
        name: "John",
        permissions: ["read", "write", "delete"]
    },
    {
        id: 2,
        name: "Jane",
        permissions: ["read"]
    }
]
```

### Constraints

* `filter()` → active users
* `map()` → transform users
* `reduce()` → combine permissions
* Duplicate permissions must be removed.

---

# 7. Sales Dashboard

```javascript
const sales = [
    {
        salesperson: "John",
        region: "North",
        amount: 1000,
        status: "completed"
    },
    {
        salesperson: "Jane",
        region: "South",
        amount: 1500,
        status: "completed"
    },
    {
        salesperson: "John",
        region: "North",
        amount: 500,
        status: "cancelled"
    },
    {
        salesperson: "Mike",
        region: "North",
        amount: 2000,
        status: "completed"
    },
    {
        salesperson: "Jane",
        region: "South",
        amount: 500,
        status: "completed"
    }
];
```

Generate a dashboard:

```javascript
{
    totalSales: 5000,
    transactionCount: 4,
    averageSale: 1250,
    byRegion: {
        North: 3000,
        South: 2000
    }
}
```

Cancelled transactions must be excluded.

### Master requirement

Build `byRegion` dynamically with `reduce()`.

---

# 8. Invoice Processing System

```javascript
const invoices = [
    {
        id: 1001,
        customer: "ABC Ltd",
        status: "paid",
        items: [
            { name: "Laptop", price: 1000, quantity: 2 },
            { name: "Mouse", price: 50, quantity: 3 }
        ]
    },
    {
        id: 1002,
        customer: "XYZ Ltd",
        status: "pending",
        items: [
            { name: "Monitor", price: 300, quantity: 2 }
        ]
    },
    {
        id: 1003,
        customer: "ABC Ltd",
        status: "paid",
        items: [
            { name: "Keyboard", price: 100, quantity: 2 }
        ]
    }
];
```

Process only paid invoices.

Return:

```javascript
[
    {
        invoiceId: 1001,
        customer: "ABC Ltd",
        total: 2150
    },
    {
        invoiceId: 1003,
        customer: "ABC Ltd",
        total: 200
    }
]
```

Then calculate:

```javascript
{
    invoiceCount: 2,
    totalRevenue: 2350,
    customers: [
        {
            name: "ABC Ltd",
            revenue: 2350
        }
    ]
}
```

This requires multiple levels of:

```text
filter
   ↓
map
   ↓
reduce
   ↓
reduce
```

---

# 9. Advanced — Group Products by Category

```javascript
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Mouse", category: "Electronics", price: 50 },
    { id: 3, name: "Desk", category: "Furniture", price: 300 },
    { id: 4, name: "Chair", category: "Furniture", price: 150 },
    { id: 5, name: "Monitor", category: "Electronics", price: 400 }
];
```

Produce:

```javascript
{
    Electronics: {
        products: [
            { id: 1, name: "Laptop", price: 1000 },
            { id: 2, name: "Mouse", price: 50 },
            { id: 5, name: "Monitor", price: 400 }
        ],
        count: 3,
        totalValue: 1450,
        averagePrice: 483.33
    },

    Furniture: {
        products: [
            { id: 3, name: "Desk", price: 300 },
            { id: 4, name: "Chair", price: 150 }
        ],
        count: 2,
        totalValue: 450,
        averagePrice: 225
    }
}
```

### Constraint

You cannot use:

```javascript
Map
```

or

```javascript
Object.groupBy()
```

Build the grouping yourself with `reduce()`.

---

# 10. 🔥 Master Challenge — ERP Financial Dashboard

This is the final challenge.

```javascript
const transactions = [
    {
        id: 1,
        date: "2026-01-10",
        type: "income",
        category: "Sales",
        amount: 5000,
        status: "completed"
    },
    {
        id: 2,
        date: "2026-01-11",
        type: "expense",
        category: "Salary",
        amount: 2000,
        status: "completed"
    },
    {
        id: 3,
        date: "2026-01-12",
        type: "expense",
        category: "Office",
        amount: 500,
        status: "completed"
    },
    {
        id: 4,
        date: "2026-01-13",
        type: "income",
        category: "Sales",
        amount: 3000,
        status: "cancelled"
    },
    {
        id: 5,
        date: "2026-01-14",
        type: "income",
        category: "Service",
        amount: 2000,
        status: "completed"
    },
    {
        id: 6,
        date: "2026-01-15",
        type: "expense",
        category: "Marketing",
        amount: 700,
        status: "completed"
    }
];
```

Build:

```javascript
{
    totalIncome: 7000,

    totalExpense: 3200,

    netProfit: 3800,

    transactionCount: 5,

    incomeTransactions: [
        {
            id: 1,
            category: "Sales",
            amount: 5000
        },
        {
            id: 5,
            category: "Service",
            amount: 2000
        }
    ],

    expenseTransactions: [
        {
            id: 2,
            category: "Salary",
            amount: 2000
        },
        {
            id: 3,
            category: "Office",
            amount: 500
        },
        {
            id: 6,
            category: "Marketing",
            amount: 700
        }
    ],

    expenseByCategory: {
        Salary: 2000,
        Office: 500,
        Marketing: 700
    }
}
```

### Strict requirements

Use:

* `filter()` to remove cancelled transactions
* `filter()` to separate income/expense
* `map()` to create the transaction DTOs
* `reduce()` for totals
* `reduce()` for category aggregation
* No mutation
* No loops
* No external libraries

### Master-level extension

Add:

```javascript
averageIncome
averageExpense
highestIncome
highestExpense
```

and:

```javascript
monthlySummary
```

such as:

```javascript
{
    "2026-01": {
        income: 7000,
        expense: 3200,
        profit: 3800
    }
}
```

---

## The real skill you're practicing

Don't memorize:

> "`map()` transforms, `filter()` filters, `reduce()` reduces."

At **master level**, you should be able to look at data and decide:

```text
Do I need fewer items?
        ↓
     filter()

Do I need different-shaped items?
        ↓
      map()

Do I need ONE result from many items?
        ↓
     reduce()

Do I need all three?
        ↓
filter → map → reduce
```

The hardest part is **not syntax**. It's designing the transformation pipeline correctly while keeping the code immutable, readable, and efficient.
