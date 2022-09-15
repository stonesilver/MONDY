import Stack from '@mui/material/Stack';
import PageTitle from '../../components/PageTitle';

const TitleBar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <PageTitle
        options={['Reports']}
        subtitle='Overall reports related to the pharmacy.'
      />
    </Stack>
  );
};

export default TitleBar;
