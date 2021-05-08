// Requiring dependencies
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Loading env variables
dotenv.config();

// Initializing the app
const app = express();

// Setting static files and view engine
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Listening on port
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});