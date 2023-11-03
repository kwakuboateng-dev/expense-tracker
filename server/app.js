const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db/db');
const { readdirSync } = require('fs');


const app = express();

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(cors());


// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));


const startServer = async () => {
  try {
    connectDB();
    const PORT = process.env.PORT || 5500; // Fallback to port 5500 if process.env.PORT is not set
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1); // Terminate the process in case of error
  }
};

startServer();
