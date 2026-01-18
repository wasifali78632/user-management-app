import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';
import CreateUserModal from './CreateUserModal';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem('token');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const res = await axios.get('/api/users', config);
      
      if (res.data.success) {
        setUsers(res.data.users);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      await axios.post('/api/users', userData, config);
      fetchUsers();
      setShowModal(false);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create user');
      return false;
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };

        await axios.delete(`/api/users/${id}`, config);
        fetchUsers();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete user');
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Management Dashboard</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add New User
        </button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="card shadow">
        <div className="card-header bg-white">
          <h5 className="mb-0">Users ({users.length})</h5>
        </div>
        <div className="card-body">
          <UserTable 
            users={users} 
            onDelete={handleDeleteUser}
          />
        </div>
      </div>

      <CreateUserModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        onCreate={handleCreateUser}
      />
    </div>
  );
};

export default Dashboard;