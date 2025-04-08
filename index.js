require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const { createClient } = require('@supabase/supabase-js');
app.locals.supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/', require('./routes/auth'));
app.use('/', require('./routes/callback'));
app.use('/', require('./routes/dashboard'));

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
