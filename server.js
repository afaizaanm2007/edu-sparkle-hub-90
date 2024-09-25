const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080; // Changed to 8080

app.use(cors());
app.use(express.json());

app.post('/auth/facebook/callback', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.get('https://graph.facebook.com/v18.0/oauth/access_token', {
      params: {
        client_id: '1249465969401900',
        client_secret: 'a378e8a422841df06baef5ede5e7e6e7',
        redirect_uri: 'http://localhost:8080/auth/facebook/callback', // Updated to 8080
        code,
      },
    });

    const { access_token } = response.data;

    // Here, you would typically save the access_token to your database
    // For this example, we'll just send it back to the client
    res.json({ access_token });
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    res.status(500).json({ error: 'Failed to exchange code for token' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
