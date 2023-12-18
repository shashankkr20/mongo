const express = require('express');
const router = express.Router();
const User = require('../schema/user');

router.put('/:perid/:objid', async (req, res) => {
    try {
        const { perid, objid } = req.params;

        const updatedUser = await User.updateOne(
            { _id: perid },
            { $pull: { cart: { objid: objid } } }
        );

        if (updatedUser.matchedCount === 0) {
            console.log('No matching user found.');
            res.status(404).send('User not found.');
        } else if (updatedUser.modifiedCount === 1) {
            console.log('Cart item removed successfully.');
            res.status(200).send('Cart item removed successfully.');
        } else {
            console.log('No changes were made.');
            res.status(304).send('No changes were made.');
        }
    } catch (error) {
        console.error('Error removing cart item:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
