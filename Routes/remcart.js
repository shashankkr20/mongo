const express = require('express');
const app = express();
const users = require('./../schema/user');
const remcart = app.put('/:perid/:objid/:quant', async (req, res) => {
  try {
    const newObject = {
      objid: req.params.objid,
      quant: parseInt(req.params.quant),
    };

    const filter = { _id: req.params.perid, 'cart.objid': req.params.objid };

    const result = await users.updateOne(filter, { $inc: { 'cart.$.quant': -newObject.quant } });

    if (result.matchedCount === 0) {
      console.log("No matching document found");
      res.status(404).send("No matching document found");
    } else if (result.modifiedCount === 1) {
      res.send("Updated successfully");
    } else {
      console.log("Unexpected case. Please check.");
      res.status(500).send("Unexpected error occurred");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = remcart;
