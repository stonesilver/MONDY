import Box from '@mui/material/Box';
import ReportsList from './ReportsList';
import TitleBar from './TitleBar.Reports';

const Reports = () => {
  return (
    <Box px={5}>
      <TitleBar />
      <ReportsList />
    </Box>
  );
};

export default Reports;
