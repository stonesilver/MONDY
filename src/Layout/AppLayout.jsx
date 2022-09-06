import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SideBar from './SideBar/SideBar';
import Stack from '@mui/material/Stack';
import SearchBar from './SearchBar';

const AppLayout = ({ children }) => {
  return (
    <main className='App'>
      <SideBar />
      <Box sx={{ bgcolor: 'primary.main', flex: '1 1 80%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 60,
            px: 5,
            py: '0.625rem',
            borderBottom: '1px solid gray',
          }}
        >
          <Box sx={{ flex: '1 1 0%' }}>
            <SearchBar />
          </Box>
          <Box sx={{ flex: '1 1 0%' }}></Box>
          <Box sx={{ width: 'fit-content' }}>
            <Stack direction='row' spacing={2} justifyContent='flex-end'>
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  bgcolor: 'yellow.main',
                }}
              ></Box>
              <Typography
                sx={{
                  fontWeight: 500,
                }}
              >
                GOOD MORNING
              </Typography>
            </Stack>
            <Stack direction='row' spacing={2}>
              <Typography sx={{ fontSize: '0.75rem' }}>
                14 January 2022
              </Typography>
              <Typography sx={{ fontSize: '0.75rem' }}>22:45:04</Typography>
            </Stack>
          </Box>
        </Box>
        {children}
      </Box>
    </main>
  );
};

export default AppLayout;
