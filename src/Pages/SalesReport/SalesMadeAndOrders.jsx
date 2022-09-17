import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StatsGridCard from '../../components/StatsGridCard';
import SalesChart from './SalesChart';
import { orders } from '../../assets/data';
import OrderRow from './OrderRow';

const OrderHeader = ({ left, right }) => {
  const style = { flex: '1', fontSize: '1rem', fontWeight: 600 };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Typography sx={style}>{left}</Typography>
      <Typography sx={style}>{right}</Typography>
    </Box>
  );
};

const SalesMadeAndOrders = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: '55%' }}>
        <SalesChart />
      </Box>
      <Box sx={{ flex: '45%' }}>
        <StatsGridCard
          customHeader={<OrderHeader left='Order ID' right='Date & Time' />}
          //   more='Date & Time'
          bgColor='white.main'
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            px={3}
            py={3}
          >
            {orders.map(({ id, date }) => (
              <OrderRow key={id} id={id} date={date} />
            ))}
          </Box>
        </StatsGridCard>
      </Box>
    </Box>
  );
};

export default SalesMadeAndOrders;
