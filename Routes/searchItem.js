const express = require('express');
const app = express();
const users = require('./../schema/product');

const searchcat = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const adduser = await users.find({ category: req.params.id });
    res.send(adduser);
  } catch (err) {
    console.error(err);
    next(err); // Pass the error to the next middleware
  }
};

// Define additional routes if needed

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
};

// Use the searchcat function for the route
app.get('/:id', searchcat);

// Use the error handling middleware
app.use(errorHandler);

module.exports = app;
