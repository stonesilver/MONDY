import Box from '@mui/material/Box';
import SearchBar from '../../components/base/SearchBar';

const CustomSearchBar = () => {
  return (
    <Box
      sx={{
        width: 304,
        mt: 2,
        borderRadius: '4px',
        border: (t) => `1px solid ${t.palette.secondary.main}5d`,
      }}
    >
      <SearchBar placeholder='Search in Medicine Details' />
    </Box>
  );
};

export default CustomSearchBar;
