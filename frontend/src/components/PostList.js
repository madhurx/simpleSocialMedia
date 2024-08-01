import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './PostList.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Failed to fetch posts');
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h3>{post.author.username}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
