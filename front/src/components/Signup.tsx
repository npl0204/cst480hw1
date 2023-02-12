<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> bdda661... Fixes stuffs
import axios, { AxiosError } from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Avatar,
  Grid
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Not logged in');
<<<<<<< HEAD
=======
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setToken(token);
      setMessage('Logged in');
    }
  }, [token]);
>>>>>>> bdda661... Fixes stuffs

  function signup(e: React.FormEvent) {
    e.preventDefault();
    axios.post('/signup', {
      username: username,
      password: password
    }).then((res) => {
      const data = res.data;
      localStorage.setItem('token', data.token);
      setMessage(data.message);
<<<<<<< HEAD
=======
      alert("Sign up successful! You are logged in");
      window.location.reload();
>>>>>>> bdda661... Fixes stuffs
    }).catch((error) => {
      let errorObj = error as AxiosError;
      if (errorObj.response === undefined) {
        throw errorObj;
      }
      let { response } = errorObj;
      console.log(response.data);
    })
  }

<<<<<<< HEAD
=======
  if(token.length > 0) {
    return (
      <>
       <h1> { message }</h1>
      </>
    )
  }


>>>>>>> bdda661... Fixes stuffs
  return (
    <>
      <Container component="main" sx={{ mt: 8, mb: 5 }} maxWidth="xs">
        <Typography variant="h5" color="lightpink"><b>{ message }</b></Typography>
        <Box
          component="form"
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <Avatar sx={{ m: 1, bgcolor: '#fd8496' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="outlined-required"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="outlined-required"
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box textAlign='center'>
                <Button variant="outlined" onClick={signup} sx={{ color: '#fd8496', mt: 3, mb: 2 }}>
                  Signup
                </Button>
              </Box>
              <Grid container>
                <Grid item>
                  <Link to={"/"} style={{ color: '#fd8496', textDecoration: 'inherit' }}>
                    <p>
                      <span className="normal">Already have an account? Sign in</span>
                    </p>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Signup;
