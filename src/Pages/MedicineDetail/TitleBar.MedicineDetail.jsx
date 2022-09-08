import Stack from '@mui/material/Stack';
import Button from '../../components/base/Button';
import PageTitle from '../../components/PageTitle';
import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';
import { useParams } from 'react-router-dom';

const TitleBar = () => {
  const { medicineName } = useParams();

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <PageTitle
        options={[
          'Inventory',
          'List of Medicines',
          medicineName.replaceAll('_', ' '),
        ]}
        subtitle='List of medicines available for sales.'
      />
      <Button
        variant='contained'
        size='large'
        icon={<EditIcon />}
        bgColor='blue.main'
        textColor='white.main'
        text='Edit Details'
      />
    </Stack>
  );
};

export default TitleBar;
