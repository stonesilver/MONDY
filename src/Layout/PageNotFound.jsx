import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100% - 60px)',
      }}
    >
      <Typography variant='h4'>
        COMRADE!!! HOW DID YOU GET TO THE ICU? 🙄
      </Typography>

      <Button
        variant='contained'
        size='large'
        sx={{ bgcolor: 'secondary.main', color: 'white.main' }}
        onClick={() => navigate('/dashboard')}
      >
        Please go Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
