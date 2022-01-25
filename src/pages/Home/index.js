import React, {useRef, useState} from 'react';
import './index.css'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {useNavigate, Link} from 'react-router-dom'
import Button from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext'

function Home() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async () =>{
    setLoading(true)
    const error = await login(emailRef.current.value, passwordRef.current.value)
    if(error){
        setLoading(false)
        return setError(error.message)
    }else{
        setLoading(false)
        navigate('/user')
    }
  }

  return (
  <div className="homepage">
      <div className="hero">
        <h1 className="hero-title"><span className="color-span">Digi</span>trainer</h1>
        <p className="hero-text">A place for you to log and analyse your training sessions over time. </p>
        <h3 className="hero-alt-text">Coming to mobile soon...</h3>
        <Link to="/signup"><Button text="Sign up now!"/></Link>
      </div>  
      <div className="login">
        <div className="login-wrapper">
          <h1 className="login-header">Login</h1>
          <input className="login-element login-input" type="text" placeholder="Username or Email" ref={emailRef}/>
          <input className="login-element login-input" type="password" placeholder="Password" ref={passwordRef}/>
          <button disabled={loading} className="login-element login-btn submit-login-btn" onClick={()=>{handleSubmit()}}>Submit</button>
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
