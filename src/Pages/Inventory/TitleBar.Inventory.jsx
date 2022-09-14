import Stack from '@mui/material/Stack';
import Button from '../../components/base/Button';
import PageTitle from '../../components/PageTitle';
import { ReactComponent as AddIcon } from '../../assets/svg/add.svg';

const TitleBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      px={5}
    >
      <PageTitle
        options={['Inventory']}
        subtitle='List of medicines available for sales.'
      />
      <Button
        variant='contained'
        icon={<AddIcon />}
        size='large'
        bgColor='red.main'
        textColor='white.main'
        text='Add New Item'
      />
    </Stack>
  );
};

export default TitleBar;
