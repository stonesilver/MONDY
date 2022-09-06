import Box from '@mui/material/Box';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar';

const AppLayout = ({ children }) => {
  return (
    <main className='App'>
      <SideBar />
      <Box
        sx={{
          bgcolor: 'primary.main',
          flex: '1 1 80%',
        }}
      >
        <TopBar />
        <Box
          sx={{
            height: 'calc(100% - 60px)',
            overflowY: 'auto',
            px: 5,
            py: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    </main>
  );
};

export default AppLayout;
