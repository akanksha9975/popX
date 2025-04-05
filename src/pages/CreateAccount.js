




import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: null,
    profilePhoto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profilePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //stores all forms of data
    localStorage.setItem('userProfile', JSON.stringify(formData));
    navigate('/account-settings');
  };

  return (
    <div className="create-account-wrapper">
    <div className="create-account-container">
        <div className="create-account-content">
          <h1 className="create-account-title">
            Create your<br />PopX account
          </h1>
          
          <form className="create-account-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name*</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Phone number*</label>
              <input
                type="tel"
                name="phoneNumber"
                className="form-input"
                placeholder="Marry Doe"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email address*</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Marry Doe"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password*</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Marry Doe"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Company name</label>
              <input
                type="text"
                name="companyName"
                className="form-input"
                placeholder="Marry Doe"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Are you an Agency?*</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === "yes"}
                    onChange={() => setFormData(prev => ({...prev, isAgency: "yes"}))}
                    required
                  />
                  <span>Yes</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === "no"}
                    onChange={() => setFormData(prev => ({...prev, isAgency: "no"}))}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
            
            {/* Photo Upload Section ...something extra */}
            <div className="form-group">
              <button 
                type="button" 
                className="upload-photo-btn"
                onClick={() => fileInputRef.current.click()}
              >
                {formData.profilePhoto ? 'Change Profile Photo' : 'Upload Profile Photo'}
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                style={{ display: 'none' }}
              />
              {formData.profilePhoto && (
                <div className="photo-preview">
                  <img src={formData.profilePhoto} alt="Profile Preview" />
                </div>
              )}
            </div>
            
            <button type="submit" className="create-account-btn">
              Create Account
            </button>
          </form>
        </div>
        
      </div>
      
    </div>
  );
}

export default CreateAccount;