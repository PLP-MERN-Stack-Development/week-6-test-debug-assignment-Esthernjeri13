# 🧪 MERN Stack Testing & Debugging – Week 6 Assignment

## 📚 Overview

This project implements **comprehensive testing and debugging strategies** for a MERN (MongoDB, Express, React, Node.js) application. It includes:

- ✅ Unit Testing (Client + Server)
- ✅ Integration Testing (API endpoints, React + API)
- ✅ End-to-End Testing (Critical user flows)
- ✅ Debugging techniques (Client & Server)
- ✅ 70%+ test coverage

---

## 📁 Project Structure

mern-testing/
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── utils/ # Utility functions for client
│ │ ├── tests/
│ │ │ ├── unit/
│ │ │ └── integration/
│ │ └── App.jsx
│ └── cypress/ # E2E tests
├── server/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── utils/
│ └── tests/
│ ├── unit/
│ └── integration/
├── jest.config.js
└── package.json

---

## 🧪 Testing Strategy

### ✅ Unit Testing

| Layer       | Tools Used              | Description                             |
|-------------|-------------------------|-----------------------------------------|
| React       | Jest + RTL              | Test components, hooks, utilities       |
| Node/Express| Jest                    | Test utilities, middleware              |

> Example: `Button.test.jsx`, `formatDate.test.js`, `math.test.js`, `logger.test.js`

---

### 🔗 Integration Testing

| Area              | Tool        | What’s Tested                         |
|-------------------|-------------|---------------------------------------|
| API Endpoints     | Supertest   | CRUD, auth, DB validation             |
| React + API       | RTL         | Components with fetch interactions    |

> Example: `posts.tests.js`

---

### 🚀 End-to-End Testing

| Tool      | Target Features                    |
|-----------|------------------------------------|
| Cypress   | Login, registration, CRUD flows    |
| Visual    | UI checks, routing, errors         |

> Cypress tests live in `client/cypress/e2e/`

---

## 🛠️ Debugging Techniques Implemented

| Layer         | Technique                          | File(s)                          |
|---------------|------------------------------------|----------------------------------|
| Client        | ErrorBoundary component            | `ErrorBoundary.jsx`              |
| Server        | Custom logger + global error catch | `logger.js`, `errorHandler.js`   |
| DevTools      | Chrome, Redux & React DevTools     | N/A                              |

---



🧩 Tools & Libraries Used
Layer	Tools
Unit Test	Jest, React Testing Library
Integration	Supertest, MongoDB Memory Server
E2E Test	Cypress
Debugging	ErrorBoundary, console logs, devtools

🧠 Learning Outcomes
Built confidence in test-driven development (TDD)

Practiced isolation & integration of MERN modules

Implemented effective debugging at all layers

Increased project reliability and stability


