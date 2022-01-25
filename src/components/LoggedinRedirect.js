import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

function LoggedinRedirect({ children }) {
    const { user } = useAuth()
    return !user ? children : <Navigate to="/user" />;
  }

export default LoggedinRedirect;