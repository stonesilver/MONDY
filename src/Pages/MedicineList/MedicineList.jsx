import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PageTitle from '../../components/PageTitle';

const options = ['Inventory', 'List of Medicines (298)'];

const MedicineList = () => {
  return (
    <Box px={5}>
      <PageTitle
        options={options}
        subtitle='List of medicines available for sales.'
      />
    </Box>
  );
};

export default MedicineList;
