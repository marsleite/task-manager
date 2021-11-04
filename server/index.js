const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());
