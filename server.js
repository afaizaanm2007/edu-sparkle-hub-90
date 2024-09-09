const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/auth/instagram/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', null, {
      params: {
        client_id: process.env.INSTAGRAM_CLIENT_ID,
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
        code,
      },
    });

    const { access_token, user_id } = response.data;

    // Here, you would typically save the access_token and user_id to your database
    // For this example, we'll just send it back to the client
    res.json({ access_token, user_id });
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    res.status(500).json({ error: 'Failed to exchange code for token' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});