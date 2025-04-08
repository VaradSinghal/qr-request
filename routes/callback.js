const express = require('express');
const router = express.Router();

router.get('/callback', async (req, res) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  res.send(`
    <script type="module">
      import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
      const supabase = createClient('${supabaseUrl}', '${supabaseKey}');
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        document.body.innerHTML = '<h2>❌ Authentication failed.</h2>';
      } else if (!user.email.endsWith('@srmist.edu.in')) {
        await supabase.auth.signOut();
        document.body.innerHTML = '<h2>❌ Not registered with our organization.</h2>';
      } else {
        window.location.href = '/dashboard';
      }
    </script>
  `);
});

module.exports = router;
