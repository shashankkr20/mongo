const express = require('express');
const app = express();
const users = require('../schema/user');

const authuser = app.get('/:id/:pass', async (req, res) => {
  try {
    const { id, pass } = req.params;
    console.log(`Authentication request for user ID: ${id}`);

    const user = await users.findOne({ "phoneno": id });

    if (user && user.password === pass) {
      console.log(`User authenticated: ${user.name}`);
      res.json(user);
    } else {
      console.log(`Authentication failed for user ID: ${id}`);
      res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = authuser;
