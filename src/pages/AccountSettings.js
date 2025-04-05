


import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './AccountSettings.css';

function AccountSettings() {
  const navigate = useNavigate();
//  fetch profile photo data
  const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
  const profilePhoto = storedProfile?.profilePhoto || null;

  return (
    <div className="account-settings-wrapper">
      <div className="account-settings-container">
        <div className="account-settings-content">
          <h1 className="account-settings-title">Account Settings</h1>
          
          <div className="profile-section">
            <div className="profile-image">
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
              ) : (
                <div className="image-placeholder"></div>
              )}
            </div>
            
            <div className="profile-info">
              <div className="profile-name">{storedProfile?.fullName || 'Marry Doe'}</div>
              <div className="profile-email">{storedProfile?.email || 'Marry@Gmail.Com'}</div>
            </div>
          </div>
          
          <div className="profile-description">
            Lorem Ipsum Dolor Sit Amet.Consectetur S adipiscing
            Elit.Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat.Sed Diam
          </div>
          
          <div className="action-buttons">
            <button className="edit-profile-btn">Edit Profile</button>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
        
        <div className="account-settings-pagination">4of4</div>
      </div>
      
      <button className="nav-arrow left-arrow" onClick={() => navigate('/create-account')}>
        <FaArrowLeft />
      </button>
      <button className="nav-arrow right-arrow" disabled>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default AccountSettings;