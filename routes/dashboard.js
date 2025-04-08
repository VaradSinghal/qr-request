const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.send(`
    <h1>🎉 Welcome to your dashboard</h1>
    <p>You are logged in with an @srmist.edu.in email.</p>
    <a href="/"><button>Logout</button></a>
  `);
});

module.exports = router;
