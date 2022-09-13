import Box from '@mui/material/Box';
import StatsGridCard from '../../components/StatsGridCard';

const DetailRow = ({rowStat}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 3,
        mt: 2,
      }}
    >
      {rowStat.map(({ category, more, details }) => (
        <StatsGridCard
          key={category}
          category={category}
          more={more}
          details={details}
        />
      ))}
    </Box>
  );
};

export default DetailRow;
