require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const ctrl = require('./controller');
const PORT = process.env.SERVER_PORT || 3001;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
