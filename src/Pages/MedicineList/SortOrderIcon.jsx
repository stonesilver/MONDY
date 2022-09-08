import Box from '@mui/material/Box';
import { ReactComponent as ChevronDown } from '../../assets/svg/chevron-down.svg';

const SortOrderIcon = () => (
  <Box
    sx={{
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '3px',
      width: 'fit-content',
      ml: 1,
      transform: 'translateY(-6px)',
    }}
  >
    <ChevronDown style={{ fill: '#000000', transform: 'rotate(180deg)' }} />
    <ChevronDown style={{ fill: '#000000' }} />
  </Box>
);

export default SortOrderIcon;
