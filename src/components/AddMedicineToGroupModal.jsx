import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ReactComponent as CloseIcon } from '../assets/svg/close-circle.svg';
import { ReactComponent as AddIcon } from '../assets/svg/add.svg';
import SearchBar from './base/SearchBar';
import Button from './base/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 567,
  height: 271,
  bgcolor: 'white.main',
  boxShadow: 24,
  borderRadius: '4px',
  py: 1,
  px: 4,
};

const AddMedicineToGroupModal = ({ open, handleOpen, handleClose }) => {
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Typography variant='h4' component='h2'>
              Add Medicine
            </Typography>
            <Typography mt={2} mb='2px'>
              Medicine
            </Typography>
            <SearchBar placeholder='Enter Medicine Name or Medicine ID' />
            <Box mt={4}>
              <Button
                icon={<AddIcon />}
                text='Add Medicine to Group'
                bgColor='red.main'
                textColor='white.main'
                variant='contained'
                handleClick={() => alert('Medicine added to group!!!')}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddMedicineToGroupModal;
