import React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { blockUser } from "../API/Likes";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Block = async({ targetEmail, email }) => {
    const result = await blockUser({ targetEmail: targetEmail, currentEmail: email })
    if(result.status === 202){
        window.location.reload()
    }
}

const ProfileCard = ({ imageUrl, profileName, targetEmail, lastname, email }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div className="flex flex-col rounded-lg overflow-hidden border-2 border-purple-800 transition delay-200 hover:scale-110 cursor-pointer hover:border-l-none" >
            <div className="relative overflow-hidden h-[5rem] w-[5rem]" onClick={handleOpen} >
                <img
                    src={`${imageUrl}`}
                    alt=""
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '1/1' }} // Adjust the aspect ratio as needed
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 font-semibold">
                    {profileName}
                </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2, ml: 10, fontSize: 22, fontWeight: 'bold' }}>
                    {profileName}&nbsp;{lastname}
                    </Typography>  
                    <Typography id="modal-modal-description" sx={{ mt: 2, ml: 4, fontSize: 19 }}>
                    Block user {targetEmail} ?
                    </Typography>
                    <div className="flex gap-6 w-full justify-between mt-8">
                        <button className="bg-pink-700 hover:bg-pink-700/80 rounded-lg text-white text-lg py-2 px-3 w-32" onClick={()=>Block({targetEmail, email})} > Block </button>
                        <button className="bg-pink-700 hover:bg-pink-700/80 rounded-lg text-white py-2 px-3 w-32" onClick={handleClose} > Cancel </button>
                    </div>
                </Box>
        </Modal>
    </div>

    )
}

export default ProfileCard

