import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DownloadReport from './DownloadReport';

const TitleBar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <Box>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
          Dashboard
        </Typography>
        <Typography>A quick data overview of the inventory.</Typography>
      </Box>
      <Box sx={{ border: '1px solid gray', borderRadius: '4px' }}>
        <DownloadReport />
      </Box>
    </Stack>
  );
};

export default TitleBar;
