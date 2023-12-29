// LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../reduxStore/hooks';
import { loggedIn } from '../reduxStore/userLogSlice';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const UserName = import.meta.env.VITE_OTT_USERNAME;
  const Password = import.meta.env.VITE_OTT_PASSWORD;

  const navigate = useNavigate();

  const dispatch = useAppDispatch(); // Typed dispatch
  const isLoggedIn = useAppSelector((state) => state.userLoginStatus.isLoggedIn);


  const handleLogin = () => {
    if ((username === UserName && password === Password) || isLoggedIn)  {
      // Valid credentials, navigate to the home page or perform other actions
      console.log('Login successful');
      dispatch(loggedIn());
      navigate('/home');
    } else {
      // Invalid credentials, show an error message or perform other actions
      setMessage('Invalid credentials');
    }
  };

  const [meesage, setMessage]=useState("")
  return (
    <div className="box">
      <h2>OTT Platform Login</h2>
      <div>
        <div className="inputbox">
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="inputbox">
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
      <center className={`  text-red-600 mb-4`}>{meesage}</center>

        <button className="loginbutton" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
