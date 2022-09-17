import Box from '@mui/material/Box';
import SalesReportFilter from './Filter.SalesReport';
import TitleBar from './TitleBar.SalesReport';

const SalesReport = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <SalesReportFilter />
    </Box>
  );
};

export default SalesReport;
