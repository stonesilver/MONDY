import Stack from '@mui/material/Stack';
import StatsGridCard from '../../components/StatsGridCard';

const DetailColumn = ({ columnStat }) => {
  return (
    <Stack spacing={2} mt={2} mb={3}>
      {columnStat.map(({ category, text }) => (
        <StatsGridCard key={category} category={category} text={text} />
      ))}
    </Stack>
  );
};

export default DetailColumn;
