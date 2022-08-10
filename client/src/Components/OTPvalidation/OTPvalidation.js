import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button } from '@mui/material';
import axios from 'axios';
import {serverURL} from '../../Constant/constant'
import { useNavigate } from 'react-router-dom';


function OTPvalidation(props) {
  console.log(props);
  //  let dispatch = useDispatch
  const [open, setOpen] = React.useState(true);
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate()
  
  // const [err, setErr] = useState('')

  const handleClose = () => {
    setOpen(false);
    props.onAction();
  };

  const renderButton = (buttonProps) => {
    return (
      <button className='otpTimer' {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
      </button>
    );
  };
  const renderTime = () => React.Fragment;

  const submitOtp = async() => {
    try{
      console.log(OTP);
      console.log('props',props.data);
      await axios({
        url:`${serverURL}otpverify`,
        method:'post',
        data:{
          otp:OTP,
          data:props.data
        }
      })
      navigate('/login')
     
    }catch(err) {
      console.log(err);
     
    }
  }

  const resendOtp = async() => {
    try{
      await axios({
        method:'post',
        url:`${serverURL}resendOtp`,
        data:{data:props.data.phNo},
      })
    }catch(err) {
     console.log(err) 
    }

  }
  return (
    <div>
       <Dialog
        className="FormContaier"
        open={open}
        maxWidth={'xs'}
        onClose={handleClose}
      >
         <DialogTitle>Enter otp</DialogTitle>
        <DialogContent>
        <OTPInput value={OTP} onChange={setOTP}  tabIndex="0" autoFocus OTPLength={6} otpType="any" disabled={false}/>
        <div className='resentOtpContainer'>
        <ResendOTP className='resentOtpButton' renderButton={renderButton} renderTime={renderTime} onResendClick={resendOtp}/>
        </div>
        <div className="errorContainer">
        {/* <p className='errorMessage'>{err}</p> */}
        </div>
        <div className='submitOtp'>
          
          <Button variant={'contained'}  onClick={submitOtp} color={'success'}>Verify</Button>
        </div>
       
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default OTPvalidation