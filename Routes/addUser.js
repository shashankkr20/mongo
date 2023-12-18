const express = require('express');
const router = express.Router();
const User = require('../schema/user');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log(`User added: ${newUser.name}`);
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
