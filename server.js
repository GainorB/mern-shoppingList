require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();

// routes
const items = require('./routes/api/items');

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      promiseLibrary: bluebird,
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(`Error while connecting to MongoDB => ${err}`));

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SECURITY
app.disable('x-powered-by');

// use routes
app.use('/api/items/', items);

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
