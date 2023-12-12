import React, { useContext, useState } from 'react';
import { List, ListItem } from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import Input from '@mui/joy/Input';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import { SidebarContext } from '../../../Context/SideBarContext';
import { UpdateProfile } from '../../API/ProfileAPI';
import { useTranslation } from 'react-i18next';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: 'black',
  border: '2px solid #be185d',
  borderRadius: '30px',
  boxShadow: 24,
  p: 4,
};

function Phone() {
  const{t}=useTranslation()
  const { profile } = useContext(SidebarContext);
  const oldEmail = profile.email;
  const phone = profile.phone;
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    const maxLength = 8;
    const truncatedValue = newValue.slice(0, maxLength);
    setInputValue(truncatedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await UpdateProfile({
      phone: inputValue,
      oldEmail: oldEmail
    });

    if (result && result.status === 202) {
      handleClose();
      window.location.reload()
    } else {
      console.error(result.message);
    }
  };
    return (
        <div>
            <div className='cursor-default text-gray-900 dark:text-white opacity-70 font-bold ml-4  translate-y-10'>{t('phone')}</div>
            <div className="mx-2 w-96 bg-gray-300 dark:bg-[rgb(20,20,28)] transform translate-y-10">
                <List className='text-gray-900 dark:text-white mt-9 '>
                    <ListItem className=' h-10 ml-4 ' disabled>
                        <span  style={{ whiteSpace: 'nowrap' }} >{phone ? phone : "None"}</span>
                        <TiTick style={{ marginLeft: 'auto' }} color='#660099' size={"24px"}/>
                    </ListItem>
                </List>
            
            </div>
                <p className='ml-4 text-gray-900 dark:text-white opacity-75 mt-16'>
                {t('verifiedphone')}
                </p>
                <div className="flex flex-col items-center justify-center mt-10">
        <button className='w-48 h-10 text-white rounded-xl bg-gradient-to-r from-pink-500 to-red-400' onClick={handleOpen} > {t('updatephone')}</button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center text-white '>
            {t('updatephone')}
            </Typography>
          </div>
          <div className='mt-5 font-bold text-white opacity-50 cursor-default '>{t('newphone')}</div>
          <form onSubmit={handleSubmit}>
            <Stack spacing={5} className='mt-9 justify-center items-center'>
              <Input type='tel' color="danger" className='w-80' value={inputValue} onChange={handleInputChange} placeholder="Enter numbers" maxLength={8} required />
              <Button type="submit" color="neutral" variant="outlined" className='w-32 '>{t('submit')}</Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Phone;