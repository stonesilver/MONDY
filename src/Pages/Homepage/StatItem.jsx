import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as ForwardIcon } from '../../assets/svg/forward.svg';

const StatItem = ({ icon, bold, body, caption, color }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      height: '152px',
      border: `1px solid ${color}`,
      borderRadius: '4px',
      overflow: 'hidden',
      cursor: 'pointer',
    }}
  >
    <Box
      sx={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'white.main',
      }}
    >
      {icon}
      <Typography sx={{ fontSize: '1.25rem', fontWeight: 700 }}>
        {bold}
      </Typography>
      <Typography>{body}</Typography>
    </Box>
    <Typography
      sx={{
        textAlign: 'center',
        bgcolor: color,
        fontSize: '0.75rem',
        py: '3px',
      }}
    >
      {caption} <ForwardIcon style={{ marginLeft: '5px' }} />
    </Typography>
  </Box>
);

export default StatItem;
