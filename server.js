const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
