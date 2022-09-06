import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { ReactComponent as ChevronDownIcon } from '../../assets/svg/chevron-down.svg';
import { ReactComponent as ExcelIcon } from '../../assets/svg/excel.svg';
import { ReactComponent as PdfIcon } from '../../assets/svg/pdf.svg';

const items = [
  {
    icon: <ExcelIcon />,
    text: 'Excel',
  },
  { divider: true },
  {
    icon: <PdfIcon />,
    text: 'PDF',
  },
];

const DownloadReport = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title='Admin menu'>
        <Button
          onClick={handleClick}
          variant='outlined'
          size='large'
          sx={{
            height: 46,
            width: 192,
            color: 'secondary.main',
            bgcolor: 'white.main',
            textTransform: 'capitalize',
          }}
          aria-controls={open ? 'Admin-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          endIcon={<ChevronDownIcon style={{ fill: '#000000' }} />}
        >
          Download Report
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='Admin-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 5,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {items.map((item, index) =>
          item.divider ? (
            <Divider key={index} />
          ) : (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 2,
                py: 1,
                cursor: 'pointer',
              }}
            >
              {item.icon}
              <Typography
                sx={{
                  flex: '1 1 0%',
                  color: item.textColor ? item.textColor : 'secondary.main',
                }}
              >
                {item.text}
              </Typography>
            </Box>
          )
        )}
      </Menu>
    </div>
  );
};

export default DownloadReport;
