const express = require('express');

require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECT_DB_URL = process.env.CONNECT_DB;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_DB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch(err => console.log(err.message));

module.exports = app;