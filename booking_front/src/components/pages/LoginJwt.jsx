import React, { useState } from "react";
import { axiosInstance } from "../../utils/axios";

export const LoginJwt = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post('/api/login', {
        user: {
        email,
        password
        }
      });

      localStorage.setItem('token', response.data.token);
      console.log('Login successful');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
}

