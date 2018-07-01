require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');

const app = express();

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
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
