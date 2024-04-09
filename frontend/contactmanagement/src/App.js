// import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from './components/CSSTable/Table';
//import {ErrorBoundary} from 'react-error-boundary'
import AuthForm from './AuthForm';
import GoogleAuth from './google_auth';
function App() {const handleGoogleLogin = () => {
    // Direct the user to the Flask route that initiates the Google OAuth flow
    window.location.href = 'http://127.0.0.1:5000/login-google'; // Adjust the URL as necessary
};
    
  return (
    <div>
      <AuthForm />
      <button onClick={handleGoogleLogin}>Login with Google</button>

    </div>
  );
}

export default App;
