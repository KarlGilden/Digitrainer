import React from 'react';
import './index.css'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import Button from '../../components/Button';
function Home() {
  const navigate = useNavigate()
  return (
  <div className="homepage">
      <div className="hero">
        <h1 className="hero-title"><span className="color-span">Digi</span>trainer</h1>
        <p className="hero-text">A place for you to log and analyse your training sessions over time. </p>
        <h3 className="hero-alt-text">Coming to mobile soon...</h3>
        <Button text="Sign up now!"/>
      </div>  
      <div className="login">
        <div className="login-wrapper">
          <h1 className="login-header">Login</h1>
          <input className="login-element login-input" type="text" placeholder="Username or Email"/>
          <input className="login-element login-input" type="password" placeholder="Password"/>
          <button className="login-element login-btn submit-login-btn" onClick={()=>{navigate('/user/')}}>Submit</button>
          <p className="login-element continue-with">or continue with</p>
          <div className="alt-login-btns">
            <button className="login-element login-btn alt-login-btn"><FcGoogle className="login-icon"/></button>
            <button className="login-element login-btn alt-login-btn"><BsFacebook className="login-icon fb"/></button>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Home;
