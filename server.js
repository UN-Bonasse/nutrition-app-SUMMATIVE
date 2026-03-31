// Load required modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load API key from .env

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve frontend from /public

// Get nutrition info for a food item
app.get('/nutrition', async (req, res) => {
  const food = req.query.food;

  if (!food) {
    return res.status(400).json({ error: 'Please provide a food item.' });
  }

  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/nutrition', {
      params: { query: food },
      headers: { 'X-Api-Key': process.env.API_KEY }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch nutrition data.' });
  }
});

// Get nutrition info for a specific food item and quantity
app.get('/nutritionitem', async (req, res) => {
  const food = req.query.food;
  const quantity = req.query.quantity;

  if (!food || !quantity) {
    return res.status(400).json({ error: 'Please provide both food and quantity.' });
  }

  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/nutritionitem', {
      params: { query: food, quantity },
      headers: { 'X-Api-Key': process.env.API_KEY }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch nutrition data for the item.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});