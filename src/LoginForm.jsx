import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { loginRequest } from './redux/actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(loginRequest(username, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
