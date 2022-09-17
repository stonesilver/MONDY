import Box from '@mui/material/Box';
import SalesReportFilter from './Filter.SalesReport';
import SalesMadeAndOrders from './SalesMadeAndOrders';
import TitleBar from './TitleBar.SalesReport';

const SalesReport = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SalesReportFilter />
      <SalesMadeAndOrders />
    </Box>
  );
};

export default SalesReport;
