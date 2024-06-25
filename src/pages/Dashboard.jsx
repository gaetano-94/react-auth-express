import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import CreatePost from '../components/CreatePost';
import ElencoPost from './ElencoPost';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => setShowCreatePost(!showCreatePost)}>
        {showCreatePost ? 'Nascondi' : 'Crea Post'}
      </button>
      {showCreatePost && <CreatePost />}
      <ElencoPost />
    </div>
  );
};

export default Dashboard;
