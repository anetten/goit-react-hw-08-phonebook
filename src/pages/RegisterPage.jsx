// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { apiRegisterUser } from '../redux/auth/authSlice.operations';
// import Notiflix from 'notiflix';

// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const defaultTheme = createTheme();

// const RegisterPage = () => {
//   const dispatch = useDispatch();

//   //new
//   const userRegister = useSelector(state => state.userRegister);
//   const { success, error } = userRegister;
//   //new

//   const onSubmit = event => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     const formData = {
//       name: data.get('firstName') + ' ' + data.get('lastName'),
//       email: data.get('email'),
//       password: data.get('password'),
//     };
//     if (!formData.name || !formData.email || !formData.password) {
//       return Notiflix.Notify.failure('All fields must be filled out');
//     }

//     dispatch(apiRegisterUser(formData));
//   };

//   //new
//   useEffect(() => {
//     if (success) {
//       Notiflix.Loading.remove();
//       Notiflix.Notify.success('Registration successful');
//     }
//     if (error) {
//       Notiflix.Notify.failure(error);
//     }
//   }, [success, error]);
//   //new

import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../redux/auth/authSlice.operations';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      name: data.get('firstName') + ' ' + data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    if (!formData.name || !formData.email || !formData.password) {
      return Notiflix.Notify.failure('All fields must be filled out');
    }

    dispatch(apiRegisterUser(formData))
      .unwrap()
      .then(() => {
        Notiflix.Notify.success('Registration successful');
        navigate('/login');
      })
      .catch(error => {
        if (error.message === 'Email in use') {
          alert(
            'This email is already in use. Please log in or use a different email.'
          );
        } else {
          Notiflix.Notify.failure(error.message);
        }
      });
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(176, 159, 150)',
        height: '100vh',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              borderRadius: '20px',
              backgroundColor: 'rgb(237, 234, 232)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#161412',
                    color: '#dad6d2',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#161412b2',
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default RegisterPage;
