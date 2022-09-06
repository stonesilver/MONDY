import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ReactComponent as HealthIcon } from '../../assets/svg/health.svg';

const StatItem = () => {
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 0%',
      minHeight: 152,
      border: '1px solid #01A768',
      borderRadius: '4px',
    }}
  >
    <Box
      sx={{
        flex: '1 1 0%',
        display: 'flex',
        placeItems: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <HealthIcon />
      <Typography>Inventory Status</Typography>
    </Box>
    <Typography sx={{ textAlign: 'center', py: 1, bgcolor: '#01A768' }}>
      View Detailed Report
    </Typography>
  </Box>;
};

const Stats = () => {
  return <Box sx={{ display: 'flex', gap: 4 }}></Box>;
};

export default Stats;
