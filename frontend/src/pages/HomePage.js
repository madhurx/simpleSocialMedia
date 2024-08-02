import React, { useState, useEffect } from 'react';
import api from '../services/api';
import PostList from '../components/PostList';

const HomePage = () => {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/posts?page=${page}`);
        const data = await response.data;
        console.log(data.posts);
        setPosts(await response.data.posts);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Failed to fetch posts');
      }
    };
    fetchPosts();
  }, [page]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Home</h1>
      {posts && console.log(posts)}
      {posts && posts.length > 0 && <PostList posts={posts} />}
      <div className="flex justify-center mt-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Previous
        </button>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
