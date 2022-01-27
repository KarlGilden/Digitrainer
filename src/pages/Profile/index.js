import React, {useState} from 'react';
import './index.css'
import {useAuth} from '../../contexts/AuthContext'

function Profile() {
  const {user, update} = useAuth();
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.displayName)

  const handleSubmit = () => {
    update(user, email, name)

  }

  return (
  <div className="profile-page">
    <h1 className="profile-title">Profile</h1>
    <div className="profile-form">
      <label htmlFor="">Display Name</label>
      <input 
      type="text" 
      className="login-input login-element" 
      value={name ? name : ''}
      onChange={(e)=>{
        setName(e.target.value)
      }}
      />
      <label htmlFor="">Email Address</label>
      <input 
      type="email" 
      className="login-input login-element" 
      value={email} 
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />
      <button className="button" onClick={handleSubmit}>Update Profile</button>
    </div>
  </div>
  );
}

export default Profile;
