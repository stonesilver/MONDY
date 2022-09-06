import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as TranslateIcon } from '../assets/svg/translate.svg';

const Translate = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id='translate-button'
        aria-controls={open ? 'translate-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<TranslateIcon />}
        sx={{ color: 'secondary.main' }}
      >
        English (US)
      </Button>
      <Menu
        id='translate-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'translate-button',
        }}
      >
        <MenuItem onClick={handleClose}>English (US)</MenuItem>
        <MenuItem onClick={handleClose}>French (FR)</MenuItem>
        <MenuItem onClick={handleClose}>Chinese (CH)</MenuItem>
      </Menu>
    </>
  );
};

export default Translate;
