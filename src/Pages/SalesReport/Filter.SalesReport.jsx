import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SalesReportFilter = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', gap: 3, mt: 2 }}
    >
      <Box sx={{ flex: '40%', height: 40, border: '1px solid gray' }}></Box>
      <Box sx={{ flex: '35%', height: 40, border: '1px solid gray' }}></Box>
      <Box sx={{ flex: '25%', height: 40, border: '1px solid gray' }}></Box>
    </Box>
  );
};

export default SalesReportFilter;
