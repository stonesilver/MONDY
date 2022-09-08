import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select from '../../components/base/Select';
import SearchBar from '../../components/base/SearchBar';
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg';

const SearchFilter = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      mt={2}
    >
      <Box sx={{ width: 304 }}>
        <SearchBar placeholder='Search Medicine Inventory..' />
      </Box>

      <Stack
        direction='row'
        alignItems='center'
        spacing={2}
        sx={{ width: 'fit-content' }}
      >
        <FilterIcon />
        <Select />
      </Stack>
    </Stack>
  );
};

export default SearchFilter;
