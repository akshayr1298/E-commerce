import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GoogleIcon from '@mui/icons-material/Google';
import { validEmail,validFname,validLname,validPhoneNumber,validPassword } from "../../RegexValidation/RegexValidation";
import { FormHelperText } from "@material-ui/core";
import axios from 'axios'
import {serverURL} from '../../Constant/constant'
import OTPvalidation from "../OTPvalidation/OTPvalidation";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp(props) {
   
   const [open, setOpen] = React.useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  //   props.onChange();
  // };
  const handleClose = () => setOpen(false);


   const classes = useStyles();
   const [fName,setfName] = useState('');
   const [lName,setlName] = useState('');
   const [phNo,setphNo]  = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmpswrd,setConfirmPswrd] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdErr, setPwdErr] = useState(false);
   const [fNameErr,setfNameErr] = useState(false);
   const [lNameErr,setlNameErr] = useState(false);
   const [phNoErr,setphNoErr]  = useState(false);
   const [userData,setUserData] = useState('')
   const [openOtpModal, setOtpModal] = useState(false)   

   const validate = async (event) => {
    event.preventDefault()

    if(!validFname.test(fName)){
      setfNameErr(true);
    }
    if(!validLname.test(lName)){

      setlNameErr(true);
    }
    if(!validPhoneNumber.test(phNo)){
      setphNoErr(true);
    }
    if (!validEmail.test(email)) {
       setEmailErr(true);
    }
    if (!validPassword.test(password)) {
       setPwdErr(true);
    }
    const data = {fName,lName,phNo,email,password}
   
    setUserData(data)

   await axios.post(`${serverURL}signup`,data).then((res)=>{
    console.log(res.data)
         
    setOtpModal(true)

      //  if (res.data === 'otp send'){
      //   // console.log(openOtpModal);
      //   // console.log('hello');
      //  }
       
    }).catch((err)=>{
     
      console.log(err);
    })


 };
 let handleCloseOtpModal = () => setOtpModal(false) 
  const handleAction=()=>{
    props.onChange('signUp')
  }
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="fname"
            autoComplete="fName"
            autoFocus
            value={fName}
            onChange={(e)=> setfName(e.target.value)}
          />
           {fNameErr && <small  style={{ color: 'red' }}>Enter a valid name</small>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lname"
            autoComplete="lname"
            autoFocus
            value={lName}
            onChange={(e)=> setlName(e.target.value)}
          />
           {lNameErr && <small style={{ color: 'red' }}>Enter a valid name</small>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phNo"
            label="Phone Number"
            type='number'
            name="phoneNo"
            autoComplete="phNo"
            autoFocus
            value={phNo}
            onChange={(e)=> setphNo(e.target.value)}
          />
           {phNoErr && <small style={{ color: 'red' }}>Enter a valid phone number</small>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type='email'
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
           {emailErr && <small style={{ color: 'red' }}>Enter a valid email</small>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
           {pwdErr && <small style={{ color: 'red' }}>Enter a valid password</small>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="confirmpswrd"
            value={confirmpswrd}
            onChange={(e)=> setConfirmPswrd(e.target.value)}
          />
          {password && confirmpswrd &&(
            <FormHelperText className='ml-1 mt-1'>
              {password === confirmpswrd ? (
                <span style={{ color: 'green' }}>Password match</span>
              ): <span style={{ color: 'red' }}>Password does not match</span>}
            </FormHelperText>
          )}
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={validate}
          >
            Sign up
          </Button>
          
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            <GoogleIcon/>
            signup with Google
          </Button> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleAction}>
                {"Don't have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
      {/* <Button variant="outlined" onCl
      ick={handleClickOpen}>
        Open alert dialog 
      </Button> */}
      {openOtpModal && <OTPvalidation  onChange={handleClose} data={userData} onAction={handleCloseOtpModal}/>}
      {/* <Dialog  > */}
       
         {/* { openOtpModal && }  */}
         {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      {/* </Dialog> */}
    </Container>
  );
}
