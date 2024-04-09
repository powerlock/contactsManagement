import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Make sure to create appropriate CSS for styling

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://127.0.0.1:5000/${isLogin ? 'login' : 'register'}`;
        try {
            const response = await axios.post(url, { username, password });
            console.log(response.data.message);
            setMessage(response.data.message);
            // Handle post-login or post-registration logic here
        } catch (error) {
            console.error('Error:', error.response ? error.response.data.error : 'There was an error.');
            setMessage(error.response ? error.response.data.error : 'There was an error.');
        }
    };

    return (
        <div className="authForm">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Need to register?' : 'Already have an account?'}
            </button>

           
        </div>
    );
};

export default AuthForm;
