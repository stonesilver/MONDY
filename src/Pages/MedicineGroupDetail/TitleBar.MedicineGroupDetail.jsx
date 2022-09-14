import Stack from '@mui/material/Stack';
import Button from '../../components/base/Button';
import PageTitle from '../../components/PageTitle';
import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';
import { useParams } from 'react-router-dom';

const TitleBar = () => {
  const { medicineName } = useParams();
  const handleClick = () => {};

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <PageTitle
        options={[
          'Inventory',
          'Medicine Groups',
          medicineName.replaceAll('-', ' '),
        ]}
        subtitle='Detailed view of a medicine group.'
      />
      <Button
        variant='contained'
        size='large'
        icon={<EditIcon />}
        bgColor='red.main'
        textColor='white.main'
        text='+ Medicine'
        handleClick={handleClick}
      />
    </Stack>
  );
};

export default TitleBar;
