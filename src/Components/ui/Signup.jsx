import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { pink } from '@mui/material/colors';
import { SignupFN } from '../API/AuthApi';
import { useNavigate } from 'react-router-dom';
import { CookieContext } from '../../Context/CookieContext';
import { useTranslation } from 'react-i18next';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));


export default function Signup({SignOpen, setSignOpen}) {
  const{t}=useTranslation()
  const { setCookie } = React.useContext(CookieContext)
  const navigate = useNavigate()

  const [SignupResponse, setSignupResponse] = React.useState({status: 0, message: '', token: '', Age: 0, email: ''})
  const [SignupLoading, setSignupLoading] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const SignupBtn = async () => {
    setSignupLoading(true)
    const response = await SignupFN({email, password, confirmPassword})
    setSignupResponse(response)
    setSignupLoading(false)
  }

  React.useEffect(()=>{
    if(SignupResponse?.status === 201){
      setCookie('TinderJWT', SignupResponse.token, SignupResponse.Age)
      setCookie('TinderEmail', SignupResponse.email, SignupResponse.Age)
      navigate("/profile")
    }
  }, [SignupResponse])

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={()=>setSignOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={SignOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2, alignSelf: "center", fontWeight: "bold", "fontSize": "larger", display: 'flex', alignItems: "center", flexDirection: "column"}} id="customized-dialog-title">
        <p style={{color: '#27005D'}}>Get Started</p><br />
        <p style={{fontWeight: "100", fontSize: '15px', marginTop: '-22px'}}> {t('by clicking')} <span style={{fontWeight: "bold"}}>{t('sign up')}</span>{t('youagree')} </p>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>setSignOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{display: 'flex', overflow: 'hidden'}}>
          <Typography gutterBottom sx={{display: 'flex', flexDirection: 'column', paddingY: "24px"}}>
            <TextField id="email" label="Email" variant="outlined" color="primary" fullWidth onChange={(e)=>setEmail(e.target.value)} />
            <TextField id="passwd" label="Password" variant="outlined" color="primary" type="password"  fullWidth sx={{marginTop: 2, width: "42vh"}} onChange={(e)=>setPassword(e.target.value)}  />
            <TextField id="confirmpasswd" label="Confirm Password" variant="outlined" color="primary" type="password"  fullWidth sx={{marginTop: 2, width: "42vh"}} onChange={(e)=>setConfirmPassword(e.target.value)}  />
            {(SignupResponse?.status === 400) && <p style={{color: 'red', alignSelf: "center", marginTop: "18px"}}> {SignupResponse?.data?.message}</p>}
            { SignupLoading ?
              <span className="loader" style={{alignSelf: "center", marginTop: "18px"}}></span>
              :
              <ColorButton variant="contained" sx={{"marginTop": 2}} fullWidth onClick={SignupBtn} >{t('sign up')}</ColorButton>
            }
          </Typography>
          </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}