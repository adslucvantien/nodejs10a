const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

// Middleware 3
app.use((req, res, next) => {
  console.log('Middleware 3');
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
