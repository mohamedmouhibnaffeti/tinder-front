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
import { LoginFN } from "../API/AuthApi"
import { useNavigate } from 'react-router-dom'
import { CookieContext } from '../../Context/CookieContext'
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


export default function Login({open, setOpen}) {
  const { setCookie } = React.useContext(CookieContext)
  const{t}=useTranslation()

  const navigate = useNavigate()
  const [LoginResponse, setLoginResponse] = React.useState({status: 0, message: '', token: '', Age: 0})
  const [LoginLoading, setLoginLoading] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const LoginBtn = async () => {
    setLoginLoading(true)
    const repsonse = await LoginFN({email, password})
    setLoginResponse(repsonse)
    setLoginLoading(false)
  }
  React.useEffect(()=>{
    if(LoginResponse?.status === 200){
      setCookie('TinderJWT', LoginResponse.token, LoginResponse.Age)
      setCookie('TinderEmail', LoginResponse.email, LoginResponse.Age)
      navigate("/MainTinder")
    }
  }, [LoginResponse])

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={()=>setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <DialogTitle sx={{ m: 0, p: 2, alignSelf: "center", fontWeight: "bold", "fontSize": "larger", display: 'flex', flexDirection: "column", alignItems: "center" }} id="customized-dialog-title">
          <p style={{color: '#27005D'}}>Get Started</p><br />
          <p style={{fontWeight: "100", fontSize: '15px', marginTop: '-22px'}}> By clicking <span style={{fontWeight: "bold"}}>{t('login')}</span>{t('youagree')} </p>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{display: 'flex', overflow: 'hidden', justifyContent: "center", alignItems: "center"}}>
          <Typography gutterBottom sx={{display: 'flex', flexDirection: 'column', paddingY: "24px"}}>
            <TextField id="outlined-basic" label="Email" variant="outlined" color="primary" fullWidth onChange={(e)=>setEmail(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined" color="primary" type="password"  fullWidth sx={{marginTop: 2, width: "42vh"}} onChange={(e)=>setPassword(e.target.value)} />
            {(LoginResponse?.status === 400) && <p style={{color: 'red', alignSelf: "center", marginTop: "18px"}}> {LoginResponse?.data?.message} </p>}
            { LoginLoading ?
              <span className="loader" style={{alignSelf: "center", marginTop: "18px"}}></span>
              :
              <ColorButton variant="contained" sx={{"marginTop": 2}} fullWidth onClick={LoginBtn}>{t('login')}</ColorButton>
            }
          </Typography>
          </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}