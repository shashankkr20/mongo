const express = require('express');
const app = express();
const Product = require('./../schema/product');

app.get('/', async (req, res) => {
    try {
        const discountedProducts = await Product.aggregate([
            {
                $match: {
                    $expr: {
                        $gte: [
                            {
                                $multiply: [
                                    { $divide: [{ $subtract: [{ $toDouble: "$actprice" }, { $toDouble: "$disprice" }] }, { $toDouble: "$actprice" }] },
                                    100
                                ]
                            },
                            25
                        ]
                    }
                }
            }
        ]);

        res.json(discountedProducts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports= app
