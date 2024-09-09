import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchInstagramFeed = async () => {
  const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
  const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
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

  const posts = data?.data?.slice(0, 6) || [];

  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="relative overflow-hidden rounded-lg shadow-md">
          <img
            src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
            alt={post.caption}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            {post.caption?.slice(0, 50)}...
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;