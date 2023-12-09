import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import { pink } from '@mui/material/colors';
const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#DE3163',
            '--TextField-brandBorderHoverColor': '#DE3163',
            '--TextField-brandBorderFocusedColor': '#DE3163',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    }
   }
)

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

const Contact = () => {
    const outerTheme = useTheme()
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen flex dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3 justify-center items-center">
                <div className="px-4 h-fit bg-gray-100 border border-gray-300 rounded-lg flex lg:flex-row flex-col md:justify-between items-center justify-center lg:gap-32 gap-12 py-12 mt-8 mb-16 dark:bg-gray-800 dark:border-purple-500">
                    <div className="flex flex-col px-4">
                        <h1 className="text-pink-600 text-3xl font-semibold ">Get in touch</h1>
                        <p className="font-semibold text-lg mt-2">We are here for you! How can we help?</p>
                        <div className="mt-8">
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField id="outlined-basic" label="Name" variant="outlined" color="primary" fullWidth />
                                <TextField id="outlined-basic" label="Email" variant="outlined" color="primary" fullWidth sx={{"marginTop": 4}} />
                                <TextField placeholder="Text" multiline rows={4} maxRows={5} fullWidth sx={{"marginTop": 4}} />
                            </ThemeProvider>
                            <ColorButton variant="contained" sx={{"marginTop": 4}} fullWidth >Submit</ColorButton>
                        </div>
                    </div>
                    <div className="px-4">            
                        <iframe src="https://lottie.host/embed/92e220dd-d7d0-46ff-ba2a-26a8e2086c30/HzTuTy2W3I.json" className="md:w-96 md:h-96 h-60 w-96"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact