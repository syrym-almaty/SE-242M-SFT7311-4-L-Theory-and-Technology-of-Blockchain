// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const web3 = require('./web3');
const contract = require('./contract');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define API routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});