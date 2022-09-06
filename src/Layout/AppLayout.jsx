import Box from '@mui/material/Box';
import SideBar from './SideBar/SideBar';

const AppLayout = ({ children }) => {
  return (
    <main className='App'>
      <SideBar />
      <Box sx={{ bgcolor: 'primary.main', flex: '1 1 80%' }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: '1 1 0%' }}></Box>
          <Box sx={{ flex: '1 1 0%' }}></Box>
          <Box sx={{ width: 'fit-content' }}></Box>
        </Box>
        {children}
      </Box>
    </main>
  );
};

export default AppLayout;
