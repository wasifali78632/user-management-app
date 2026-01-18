import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            User Management
          </Link>
          
          <div className="navbar-nav ms-auto">
            {token ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <button 
                  className="nav-link btn btn-link" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="py-4">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">User Management System by Wasif Ali &copy; 2026 </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;