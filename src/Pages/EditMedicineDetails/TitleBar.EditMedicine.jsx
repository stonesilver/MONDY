import Stack from '@mui/material/Stack';
import PageTitle from '../../components/PageTitle';
import { useParams } from 'react-router-dom';

const TitleBar = () => {
  const params = useParams();
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <PageTitle
        options={['Inventory', 'List of Medicines', 'Edit Medicine']}
        subtitle={`Edit the appropriate fields for ${params.medicineName.replaceAll(
          '_',
          ' '
        )}`}
      />
    </Stack>
  );
};

export default TitleBar;
