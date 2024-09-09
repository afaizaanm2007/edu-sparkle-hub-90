import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchInstagramFeed = async () => {
  const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
  const fields = 'id,media_type,media_url,permalink,caption,thumbnail_url';
  const limit = 6;
  
  const response = await fetch(`https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch Instagram feed');
  }
  return response.json();
};

const InstagramFeed = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['instagramFeed'],
    queryFn: fetchInstagramFeed,
  });

  if (isLoading) return <div>Loading Instagram feed...</div>;
  if (error) return <div>Error loading Instagram feed: {error.message}</div>;

  const posts = data?.data || [];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
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