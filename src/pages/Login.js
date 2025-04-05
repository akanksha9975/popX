
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      console.log('Login submitted:', formData);
      navigate('/account-settings');
    }
  };

  const isFormValid = formData.email && formData.password;




  // here starts code
  return (
    <div className="login-page-wrapper">
      <div className="login-border-container">
       <div className="login-content-top">
          <h1 className="login-title">Signin to your PopX account</h1>
          
          <p className="login-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
    <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
             />
            </div>
            
            <button 
              type="submit" 
              className={`login-button ${isFormValid ? 'active' : ''}`}
              disabled={!isFormValid}
            >
              Login
            </button>
          </form>
        </div>
        
      </div>
      
    </div>
  );
}

export default Login;