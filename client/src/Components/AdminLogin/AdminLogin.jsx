import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validEmail,validPassword } from '../../RegexValidation/RegexValidation';
import { useState } from 'react';
import axios from 'axios';
import { serverURL } from '../../Constant/constant';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();


export default function AdminLogin() {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [emailErr,setEmailErr] = useState(false)
const [pswrdErr,setPswrdErr] = useState(false)
const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!validEmail.test(email)){
      setEmailErr(true)
    }
    if(!validPassword.test(password)){
      setPswrdErr(true)
    }
    
    const data = {email,password}
    console.log('data',data)
  await  axios.post(`${serverURL}admin/adminlogin`,data).then((res)=>{
    console.log(res)
    navigate('/adminhome')
  })

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              
            />
            {emailErr && <small style={{color:"red"}}> Enter a valid email</small>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
             {pswrdErr && <small style={{color:"red"}}> Enter a valid Password</small>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}