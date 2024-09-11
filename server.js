const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/auth/instagram/callback', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.post('https://graph.facebook.com/v18.0/oauth/access_token', null, {
      params: {
        client_id: '1249465969401900',
        client_secret: 'a378e8a422841df06baef5ede5e7e6e7',
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:5000/auth/instagram/callback',
        code,
      },
    });

    const { access_token } = response.data;

    // Get the Instagram user ID
    const userResponse = await axios.get(`https://graph.facebook.com/v18.0/me?fields=id,instagram_business_account&access_token=${access_token}`);
    const instagramUserId = userResponse.data.instagram_business_account.id;

    // Here, you would typically save the access_token and instagramUserId to your database
    // For this example, we'll just send it back to the client
    res.json({ access_token, instagram_user_id: instagramUserId });
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    res.status(500).json({ error: 'Failed to exchange code for token' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});