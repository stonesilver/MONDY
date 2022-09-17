import Box from '@mui/material/Box';
import SalesReportFilter from './Filter.SalesReport';
import SalesChart from './SalesChart';
import TitleBar from './TitleBar.SalesReport';

const SalesReport = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SalesReportFilter />
      <SalesChart />
    </Box>
  );
};

export default SalesReport;
