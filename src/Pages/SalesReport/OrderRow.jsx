import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const OrderRow = ({ id, date }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography sx={{ flex: '1' }}>{id}</Typography>
      <Typography sx={{ flex: '1' }}>{date}</Typography>
    </Box>
  );
};

export default OrderRow;
