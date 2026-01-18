import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-5">
      <div className="container">
       <h1 className="display-4 mb-4">Welcome to User Management System</h1> 
        <p className="lead mb-4">
          A complete full-stack application built with Laravel and React
        </p>
        
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body p-5">
                <h3 className="mb-4">Features</h3>
                
                <div className="row text-start">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-primary rounded-circle p-2 me-3">
                        <i className="bi bi-person-plus text-white"></i>
                      </div>
                      <h5 className="mb-0">User Registration</h5>
                    </div>
                    <p className="text-muted">Secure user registration with validation</p>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-success rounded-circle p-2 me-3">
                        <i className="bi bi-box-arrow-in-right text-white"></i>
                      </div>
                      <h5 className="mb-0">Authentication</h5>
                    </div>
                    <p className="text-muted">JWT token based authentication</p>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-info rounded-circle p-2 me-3">
                        <i className="bi bi-people text-white"></i>
                      </div>
                      <h5 className="mb-0">User Management</h5>
                    </div>
                    <p className="text-muted">Full CRUD operations for users</p>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-warning rounded-circle p-2 me-3">
                        <i className="bi bi-shield-check text-white"></i>
                      </div>
                      <h5 className="mb-0">Secure API</h5>
                    </div>
                    <p className="text-muted">Protected API endpoints with Sanctum</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h5 className="mb-3">Tech Stack</h5>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                    <span className="badge bg-primary p-2">Laravel 10</span>
                    <span className="badge bg-success p-2">React 18</span>
                    <span className="badge bg-danger p-2">MySQL</span>
                    <span className="badge bg-warning p-2">Bootstrap 5</span>
                    <span className="badge bg-info p-2">REST API</span>
                    <span className="badge bg-dark p-2">JWT Authentication</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/register" className="btn btn-primary btn-lg me-3">
                    Get Started
                  </Link>
                  <Link to="/login" className="btn btn-outline-primary btn-lg">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;