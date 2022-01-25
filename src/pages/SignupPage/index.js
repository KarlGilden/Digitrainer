import React, {useRef, useState} from 'react';
import './index.css'
import Button from '../../components/Button'
import {useAuth} from '../../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'

function SignupPage() {
  const navigate = useNavigate()
  const {signup} = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const handleSubmit = async () => {
    console.log('aaa')
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords do not match")
  }else if(passwordRef.current.value.length <= 6){
      return setError("Password must be at least 6 characters long")
  }
  try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
      navigate("/user")

  }catch{
      setError("Failed to create account")
  }
  setLoading(false)
  }

  return (
  <div className="signup-page">
      <div className="signup">
        <h1 className="signup-title">Register</h1>
        {error}
        <small className="signup-label">Email:</small>
        <input ref={emailRef} className="login-element login-input" type="email" />
        <small className="signup-label">Display Name:</small>
        <input ref={nameRef} className="login-element login-input" type="text"/>
        <small className="signup-label">Password:</small>
        <input ref={passwordRef} className="login-element login-input" type="password"/>
        <small className="signup-label">Confirm Password:</small>
        <input ref={passwordConfirmRef} className="login-element login-input" type="password"/>
        <button onClick={handleSubmit} color="dark" text="Register">submit</button>
      </div>
  </div>
  );
}

export default SignupPage;
