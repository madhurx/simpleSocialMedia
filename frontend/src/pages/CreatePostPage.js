import React, { useState } from 'react';
import api from '../services/api';
import './Form.css';

const CreatePostPage = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/posts', { content });
      setContent('');
    } catch (error) {
      console.error('Failed to create post');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Create Post</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="form-input"
        />
        <button type="submit" className="form-button">Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
