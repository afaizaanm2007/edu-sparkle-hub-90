import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from "@/components/ui/button";

const INSTAGRAM_APP_ID = import.meta.env.VITE_INSTAGRAM_APP_ID;
const INSTAGRAM_APP_SECRET = import.meta.env.VITE_INSTAGRAM_APP_SECRET;
const REDIRECT_URI = `${window.location.origin}/instagram-callback`;

const InstagramFeed = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('instagramAccessToken'));

  const handleLogin = () => {
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
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
      const response = await axios.post('/auth/instagram/callback', { code });
      const { access_token } = response.data;
      localStorage.setItem('instagramAccessToken', access_token);
      setAccessToken(access_token);
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  };

  const fetchInstagramFeed = async () => {
    if (!accessToken) return null;

    const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
    return response.data.data;
  };

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['instagramFeed', accessToken],
    queryFn: fetchInstagramFeed,
    enabled: !!accessToken,
  });

  if (!accessToken) {
    return (
      <div className="text-center">
        <p className="mb-4">Connect your Instagram account to display your feed.</p>
        <Button onClick={handleLogin}>Connect Instagram</Button>
      </div>
    );
  }

  if (isLoading) return <div>Loading Instagram feed...</div>;
  if (error) return <div>Error loading Instagram feed: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts && posts.map((post) => (
        <a 
          key={post.id} 
          href={post.permalink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
            alt={post.caption?.slice(0, 100) || 'Instagram post'}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            {post.caption?.slice(0, 50)}...
          </div>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;