import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const GoogleAuth = () => {
    const handleGoogleLogin = () => {
        // Direct the user to the Flask route that initiates the Google OAuth flow
        window.location.href = 'http://127.0.0.1:5000/login-google'; // Adjust the URL as necessary
    };
    
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const handleLoginSuccess = async (googleData) => {
//         // Here you would typically send the token to your backend
//         // for verification and user creation/log in, then handle
//         // the response accordingly (e.g., storing the session token).
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/google-login', {
//                 token: googleData.tokenId,
//             });
//             console.log(response.data.message);
//             setMessage(response.data.message);
//             // Handle login logic here (e.g., redirect, update app state)
//         } catch (error) {
//             console.error('Login failed:', error);
//             setMessage('Login failed');
//         }
//     };

//     const handleLoginFailure = (error) => {
//         console.error('Google login failed:', error);
//         setMessage('Google login failed');
//     };

//     return (
//         <div className="GoogleAuth">
//             {/* Existing form fields for username/password */}
//             <GoogleLogin
//                 clientId="156285614807-nfb2vpnmvmhurm3eqf3kbml13r816let.apps.googleusercontent.com"
//                 buttonText="Login with Google"
//                 onSuccess={handleLoginSuccess}
//                 onFailure={handleLoginFailure}
//                 cookiePolicy={'single_host_origin'}
//             />
//             {message && <p>{message}</p>}
//         </div>
//     );

};

export default GoogleAuth;
