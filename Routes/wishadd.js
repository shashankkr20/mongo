const express = require('express');
const app = express();
const users = require('./../schema/user');

const wishadder = app.put('/add/:perid/:objid', async (req, res, next) => {
  try {
    console.log("Wishlist Add");
    const filter = { _id: req.params.perid };
    const wish = await users.updateOne(filter, { $addToSet: { wishlist: req.params.objid } });

    if (wish.matchedCount === 0) {
      console.log("Document not found");
      return res.status(404).send("Document not found");
    } else if (wish.modifiedCount === 1) {
      return res.send("Wishlist updated successfully");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

const wishrem = app.put('/rem/:perid/:objid', async (req, res, next) => {
  try {
    console.log("Wishlist Remove");
    const filter = { _id: req.params.perid };
    const wish = await users.updateOne(filter, { $pull: { wishlist: req.params.objid } });

    if (wish.matchedCount === 0) {
      console.log("Document not found");
      return res.status(404).send("Document not found");
    } else if (wish.modifiedCount === 1) {
      return res.send("Wishlist updated successfully");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
};

// Use the error handling middleware
app.use(errorHandler);

module.exports = { wishadder, wishrem };
