const express = require('express');
const app = express();
const users = require('./../schema/user');
const adduser = require('./addUser');

app.put('/:perid', async (req, res) => {
  try {
    const filter = { _id: req.params.perid };

    // Use findOneAndUpdate to get the document before the update and check if it exists
    const user = await users.findOne(filter);

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update the cart to an empty array
    const result = await users.findOneAndUpdate(filter, { $set: { cart: [] } });

    if (result) {
      res.status(200).send('Cart emptied');
    } else {
      console.log('Cart not emptied');
      res.status(500).send('Internal Server Error');
    }
  } catch (error) {
    console.error('Error emptying cart:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;
