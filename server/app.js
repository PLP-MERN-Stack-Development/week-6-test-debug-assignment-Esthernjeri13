// server/app.js
const express = require('express');
const app = express();
const errorHandler = require('./src/middleware/errorHandler');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Example route to test error handling
app.get('/error', (req, res) => {
  throw new Error('Test error');
});

// Global Error Handler (MUST be after routes)
app.use(errorHandler);

module.exports = app;
