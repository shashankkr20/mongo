const express = require('express');
const app = express();
const Order = require('./../schema/order'); // Assuming Order is the correct schema/model name

const getOrders = app.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(`Fetching orders for user ID: ${userId}`);

    const userOrders = await Order.find({ "perid": userId });

    if (userOrders.length > 0) {
      res.json(userOrders);
    } else {
      res.status(404).json({ error: 'No orders found for the specified user ID' });
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = getOrders;
