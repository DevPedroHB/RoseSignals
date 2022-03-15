const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/image/user', express.static(path.resolve(__dirname, '..', 'uploads', 'users')));
app.use(routes);

app.listen(process.env.PORT);