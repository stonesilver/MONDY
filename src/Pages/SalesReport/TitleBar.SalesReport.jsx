import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DownloadReport from '../../components/DownloadReport';
import PageTitle from '../../components/PageTitle';

const TitleBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <PageTitle
        options={['Reports', 'Sales Report']}
        subtitle='Sales related report of the pharmacy.'
      />
      <Box sx={{ border: '1px solid gray', borderRadius: '4px' }}>
        <DownloadReport />
      </Box>
    </Stack>
  );
};

export default TitleBar;
