import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomSelect from '../../components/base/Select';

const SalesReportFilter = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', gap: 3, mt: 2 }}
    >
      <Box sx={{ flex: '40%', height: 40, border: '1px solid gray' }}></Box>
      <Box sx={{ flex: '35%' }}>
        <Typography mb='3px'>Medicine Group</Typography>
        <CustomSelect
          options={[]}
          value='- Select Group -'
          placeholder='- Select Group -'
          name='medicineGroup'
          handleChange={() => {}}
          bgcolor='#b7c1ca6e'
        />
      </Box>
      <Box sx={{ flex: '25%' }}>
        <Typography mb='3px'>User Name</Typography>
        <CustomSelect
          options={[]}
          value='- Select User Name -'
          placeholder='- Select User Name -'
          name='userName'
          handleChange={() => {}}
          bgcolor='#b7c1ca6e'
        />
      </Box>
    </Box>
  );
};

export default SalesReportFilter;
