import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ReactComponent as ForwardIcon } from '../assets/svg/forward.svg';

const StatsGridCard = ({
  category,
  more,
  details,
  text,
  bgColor,
  children,
}) => {
  return (
    <Box
      sx={{
        border: (t) => `1px solid ${t.palette.secondary.main}4d`,
        borderRadius: '4px',
        bgcolor: bgColor,
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        py='0.75rem'
        px={3}
        sx={{
          borderBottom: (t) => `1px solid ${t.palette.secondary.main}4d`,
        }}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>
          {category}
        </Typography>
        {more && (
          <Typography sx={{ fontSize: '0.75rem' }}>
            {more} <ForwardIcon style={{ marginLeft: '4px' }} />
          </Typography>
        )}
      </Stack>
      {details && (
        <Box sx={{ display: 'flex', px: 3, py: 3 }}>
          {details.map(({ count, description }) => (
            <Box key={count} sx={{ flex: '1' }}>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700 }}>
                {count}
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>{description}</Typography>
            </Box>
          ))}
        </Box>
      )}
      {text && (
        <Typography py={2} px={3}>
          {text}
        </Typography>
      )}
      <Box>{children}</Box>
    </Box>
  );
};

StatsGridCard.defaultProps ={
  bgColor: 'transparent'
}

export default StatsGridCard;
