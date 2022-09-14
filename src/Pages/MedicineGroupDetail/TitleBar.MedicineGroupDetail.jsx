import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '../../components/base/Button';
import PageTitle from '../../components/PageTitle';
import { ReactComponent as AddIcon } from '../../assets/svg/add.svg';
import { useParams } from 'react-router-dom';
import AddMedicineToGroupModal from '../../components/AddMedicineToGroupModal';

const TitleBar = () => {
  const [open, setOpen] = useState(false);

  const { medicineName } = useParams();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <AddMedicineToGroupModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
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
        icon={<AddIcon />}
        bgColor='red.main'
        textColor='white.main'
        text='Add Medicine'
        handleClick={handleOpen}
      />
    </Stack>
  );
};

export default TitleBar;
