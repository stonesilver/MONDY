import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const OrderRow = ({ id, date }) => {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <Typography>{id}</Typography>
      <Typography>{date}</Typography>
    </Stack>
  );
};

export default OrderRow;
