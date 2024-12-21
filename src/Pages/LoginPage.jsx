import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Login = () => {
  const { login } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) return alert('Please enter all fields.');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] === password) {
      login(username);
    } else {
      alert('Invalid username or password!');
    }
  };

  const handleRegister = () => {
    if (!username || !password) return alert('Please enter all fields.');
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      alert('User already exists!');
    } else {
      users[username] = password;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful! Please log in.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 mb-4 w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-2 mr-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
