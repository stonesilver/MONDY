import Stack from '@mui/material/Stack';
import Button from '../../components/base/Button';
import PageTitle from '../../components/PageTitle';
import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';

const TitleBar = () => {
  const handleClick = () => {};

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <PageTitle
        options={['Inventory', 'Medicine Groups']}
        subtitle='List of medicines groups.'
      />
      <Button
        variant='contained'
        size='large'
        icon={<EditIcon />}
        bgColor='red.main'
        textColor='white.main'
        text='+ Add New Group'
        handleClick={handleClick}
      />
    </Stack>
  );
};

export default TitleBar;
