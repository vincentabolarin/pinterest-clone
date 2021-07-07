// Create Express server
const express = require('express');
const connectDB = require('./db/');
require('dotenv').config();
const { PORT } = process.env;

// Connect to database
connectDB();

// Initialise Express
const app = express();

// Initialise Express middleware
app.use(express.json({ extended: false }));

// Create basic GET route
app.get('/', (req, res) => res.json({ message: "Welcome to Pinterest!"}));

// PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`App running on port ${port}`));