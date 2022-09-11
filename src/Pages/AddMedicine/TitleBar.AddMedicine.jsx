import Stack from '@mui/material/Stack';
import PageTitle from '../../components/PageTitle';

const TitleBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <PageTitle
        options={['Dashboard', 'List of Medicines', 'Add New Medicine']}
        subtitle='*All fields are mandatory, except mentioned as (optional).'
      />
    </Stack>
  );
};

export default TitleBar;
