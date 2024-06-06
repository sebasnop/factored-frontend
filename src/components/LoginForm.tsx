import { Box, Button, CircularProgress, TextField } from "@mui/material";


import React, { useEffect, useState } from "react";
import { useAppContext } from '../context/AppContext';
import type { AppContextInterface } from "../context/AppContext";

import { useNavigate } from 'react-router-dom';

function LoginForm() {
  
  const {
    loggedIn,
    setLoggedIn,
  }: AppContextInterface = useAppContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setLoggedIn(true);

    const data = new FormData(event.currentTarget);

    const email: string = data.get('email')?.toString() || "";
    const password: string = data.get('password')?.toString() || "";

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result.message === "Login successful") {
        setLoggedIn(true);
        setIsLoading(false);
      } else {
        console.error("Login failed: ", result.message);
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/start'); // Navega a /start cuando loggedIn sea true
    }
  }, [loggedIn, navigate]);


  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        disabled={isLoading}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        disabled={isLoading}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Sign In'}
      </Button>
    </Box>
  );
}

export { LoginForm };
