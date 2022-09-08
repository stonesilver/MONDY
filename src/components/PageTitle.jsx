import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ReactComponent as ChevronDown } from '../assets/svg/chevron-down.svg';

const PageTitle = ({ options, subtitle }) => {
  return (
    <Box>
      <Stack direction='row'>
        {options.map((item, index) => (
          <Typography
            key={item}
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 24,
              fontWeight: 700,
              color: (t) =>
                index + 1 === options.length
                  ? t.palette.secondary.main
                  : `${t.palette.secondary.main}5d`,
            }}
          >
            {index + 1 > 1 && (
              <ChevronDown
                style={{
                  fill: '#000000',
                  transform: 'rotate(-90deg)',
                  margin: '0 8px',
                }}
              />
            )}
            {item}
          </Typography>
        ))}
      </Stack>
      <Typography>{subtitle}</Typography>
    </Box>
  );
};

export default PageTitle;
