const express = require('express');
const router = express.Router();
const Order = require('../schema/order');

router.post('/', async (req, res) => {
    try {
        console.log(req.body.perid);
        const newOrder = await Order.create(req.body);
        console.log('Order added:', newOrder);
        res.status(201).json({ message: 'Order added successfully' });
    } catch (error) {
        console.error('Error adding order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
