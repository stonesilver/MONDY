import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TitleBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      px={5}
    >
      <Box>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
          Inventory
        </Typography>
        <Typography>List of medicines available for sales.</Typography>
      </Box>
      <Button
        variant='contained'
        size='large'
        sx={{ bgcolor: 'red.main', color: 'white.main' }}
      >
        + Add New Item
      </Button>
    </Stack>
  );
};

export default TitleBar;
