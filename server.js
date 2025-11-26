const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch'); // if using Node v18+, you can use global fetch

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // serves public folder

app.get('/nutrition', async (req, res) => {
  const food = req.query.food;

  if (!food) return res.json({ error: 'No food provided' });

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(food)}`, {
      headers: { 'X-Api-Key': process.env.API_KEY }
    });

    if (!response.ok) {
      return res.json({ error: 'API request failed' });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
