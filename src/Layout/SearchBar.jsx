import { useState } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!searchInput) return;
    alert(`Searching ${searchInput}....`);
  };
  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          backgroundColor: '#E3EBF3',
          border: '1px solid gray',
        }}
        value={searchInput}
        onChange={handleChange}
        placeholder='Search for anything here..'
        inputProps={{ 'aria-label': 'Search for anything here..' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;