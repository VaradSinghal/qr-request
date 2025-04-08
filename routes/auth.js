const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/login', async (req, res) => {
  const supabase = req.app.locals.supabase;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/callback',
    },
  });

  if (error) {
    return res.send('Error logging in.');
  }

  res.redirect(data.url);
});

module.exports = router;
