import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '../../components/base/Button';

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
        bgColor='red.main'
        textColor='white.main'
        text='+ Add New Item'
      />
    </Stack>
  );
};

export default TitleBar;
