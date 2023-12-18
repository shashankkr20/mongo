const express = require('express');
const app = express();
const users = require('./../schema/user');
const adduser = require('./addUser');

const cartadd = app.put('/:perid/:objid/:title/:price/:image/:quant', async (req, res) => {
  try {
    const { perid, objid, title, price, image, quant } = req.params;

    const newObject = {
      objid: objid,
      quant: parseInt(quant),
      title: title,
      price: price,
      image: image,
    };

    const filter = { _id: perid, 'cart.objid': objid };

    const updateResult = await users.updateOne(filter, { $inc: { 'cart.$.quant': parseInt(quant) } });

    if (updateResult.matchedCount === 0) {
      await users.updateOne({ _id: perid }, { $push: { cart: newObject } });
      res.status(201).json({ message: 'Added successfully' });
    } else if (updateResult.modifiedCount === 1) {
      res.status(200).json({ message: 'Updated successfully' });
    } else {
      res.status(500).json({ message: 'Unexpected error occurred during update' });
    }
  } catch (err) {
    console.error('Error in cartadd route:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = cartadd;
