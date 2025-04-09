const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SRM Dashboard</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
          min-height: 100vh;
          color: #e0e0e0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dashboard-container {
          background: #333;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          text-align: center;
          width: 100%;
          max-width: 600px;
        }
        h1 {
          color: #e0e0e0;
          font-size: 2.5em;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2em;
          color: #b0b0b0;
          margin-bottom: 30px;
        }
        button {
          background: #1e3c72;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1em;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #153057;
        }
      </style>
    </head>
    <body>
      <div class="dashboard-container">
        <h1>🎉 Welcome to Your Dashboard</h1>
        <p>You are logged in with an @srmist.edu.in email.</p>
        <a href="/"><button>Logout</button></a>
      </div>
    </body>
    </html>
  `);
});

module.exports = router;