import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DownloadReport from './DownloadReport';
import PageTitle from '../../components/PageTitle';

const TitleBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      px={5}
    >
      <PageTitle
        options={['Dashboard']}
        subtitle='A quick data overview of the inventory.'
      />
      <Box sx={{ border: '1px solid gray', borderRadius: '4px' }}>
        <DownloadReport />
      </Box>
    </Stack>
  );
};

export default TitleBar;
