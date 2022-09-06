import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as InfoIcon } from '../assets/svg/info.svg';

const MobileScreenError = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        height: '100vh',
        px: 3,
      }}
    >
      <InfoIcon />
      
      <Typography sx={{ textAlign: 'center', fontSize: '0.85rem' }}>
        This Dashboard currently doesn't support mobile devices
      </Typography>

      <Typography sx={{ textAlign: 'center', fontSize: '0.85rem' }}>
        For best experience, We recommend you access the dashboard with{' '}
        <Typography as='strong' sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
          Google Chrome, Mozilla Firefox or any other suitable browser
        </Typography>{' '}
        on a{' '}
        <Typography as='strong' sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
          DESKTOP OR TABLET
        </Typography>{' '}
        device!
      </Typography>
    </Box>
  );
};

export default MobileScreenError;
