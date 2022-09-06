import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { ReactComponent as ChevronDownIcon } from '../../assets/svg/chevron-down.svg';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ name, icon, subItem, link, pathname }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (link) => {
    if (pathname === link) {
      setOpen((prevS) => !prevS);
    } else {
      navigate(link);
      setOpen((prevS) => !prevS);
    }
  };

  const isActive = pathname === link;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 46,
          bgcolor: isActive ? 'green.teal' : 'transparent',
          px: 3,
          cursor: 'pointer',
        }}
        onClick={() => handleToggle(link)}
      >
        <Stack direction='row' alignItems='center' spacing={2}>
          {icon}
          <Typography sx={{ color: 'white.main', fontWeight: 500 }}>
            {name}
          </Typography>
        </Stack>
        {Boolean(subItem) && (
          <ChevronDownIcon
            style={{
              transform: `rotate(${open ? '180' : '0'}deg)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          maxHeight: open ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {subItem?.map(({ name, link }) => (
          <Typography
            as='a'
            key={name}
            sx={{
              display: 'flex',
              height: 46,
              color: 'white.main',
              alignItems: 'center',
              bgcolor: pathname === link ? 'green.teal' : 'secondary.main',
              fontWeight: 500,
              pl: 7,
              cursor: 'pointer',
            }}
            onClick={() => navigate(link)}
          >
            {name}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default MenuItem;
