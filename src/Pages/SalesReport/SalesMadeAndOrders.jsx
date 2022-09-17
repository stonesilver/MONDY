import Box from '@mui/material/Box';
import StatsGridCard from '../../components/StatsGridCard';
import SalesChart from './SalesChart';


const SalesMadeAndOrders = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ flex: '55%' }}>
        <SalesChart />
      </Box>
      <Box sx={{ flex: '45%' }}>
        <StatsGridCard
          category='Order ID'
          more='Date & Time'
          bgColor='white.main'
        >

        </StatsGridCard>
      </Box>
    </Box>
  );
};

export default SalesMadeAndOrders;
