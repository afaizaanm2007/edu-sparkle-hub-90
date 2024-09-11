import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from "@/components/ui/button";

const FACEBOOK_APP_ID = '1249465969401900';
const REDIRECT_URI = 'http://localhost:5000/auth/facebook/callback';

const FacebookFeed = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('facebookAccessToken'));

  const handleLogin = () => {
    window.location.href = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${FACEBOOK_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=user_posts&response_type=code`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      exchangeCodeForToken(code);
    }
  }, []);

  const exchangeCodeForToken = async (code) => {
    try {
      const response = await axios.post('/auth/facebook/callback', { code });
      const { access_token } = response.data;
      localStorage.setItem('facebookAccessToken', access_token);
      setAccessToken(access_token);
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  };

  const fetchFacebookFeed = async () => {
    if (!accessToken) return null;

    const response = await axios.get(`https://graph.facebook.com/v18.0/me/posts?fields=id,message,full_picture,created_time&access_token=${accessToken}`);
    return response.data.data;
  };

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['facebookFeed', accessToken],
    queryFn: fetchFacebookFeed,
    enabled: !!accessToken,
  });

  if (!accessToken) {
    return (
      <div className="text-center">
        <p className="mb-4">Connect your Facebook account to display your feed.</p>
        <Button onClick={handleLogin}>Connect Facebook</Button>
      </div>
    );
  }

  if (isLoading) return <div>Loading Facebook feed...</div>;
  if (error) return <div>Error loading Facebook feed: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts && posts.map((post) => (
        <div 
          key={post.id} 
          className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {post.full_picture && (
            <img
              src={post.full_picture}
              alt={post.message?.slice(0, 100) || 'Facebook post'}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            {post.message?.slice(0, 50) || 'No message'}...
            <br />
            <small>{new Date(post.created_time).toLocaleDateString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacebookFeed;