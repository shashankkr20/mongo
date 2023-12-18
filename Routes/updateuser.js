const express = require('express');
const app = express();
const users = require('./../schema/user');

const upduser = async (req, res, next) => {
  try {
    console.log("User Update Search");
    console.log(req.params.id);

    // Ensure that req.params.id is a valid MongoDB ObjectId string
    if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
      return res.status(400).send('Invalid ObjectId format');
    }

    const user = await users.findOne({ "_id": req.params.id });

    // Check if the user was found
    if (!user) {
      return res.status(404).send('User not found for the provided ID');
    }

    res.send(user);
  } catch (err) {
    console.error(err);
    next(err); // Pass the error to the next middleware
  }
};

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
};

// Use the upduser function for the route
app.get('/:id', upduser);

// Use the error handling middleware
app.use(errorHandler);

module.exports = app;
