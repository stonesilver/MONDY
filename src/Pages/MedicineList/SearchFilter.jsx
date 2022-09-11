import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CustomSelect from '../../components/base/Select';
import SearchBar from '../../components/base/SearchBar';
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg';

const SearchFilter = () => {
  const [option, setOption] = useState('- Select Group -');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      mt={2}
    >
      <Box
        sx={{
          width: 304,
          borderRadius: '4px',
          border: (t) => `1px solid ${t.palette.secondary.main}5d`,
        }}
      >
        <SearchBar placeholder='Search Medicine Inventory..' />
      </Box>

      <Stack
        direction='row'
        alignItems='center'
        spacing={2}
        sx={{ width: 'fit-content' }}
      >
        <FilterIcon />

        <Box sx={{ minWidth: 217 }}>
          <CustomSelect
            options={['Group One', 'Group Two', 'Group Three']}
            value={option}
            handleChange={handleChange}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default SearchFilter;
