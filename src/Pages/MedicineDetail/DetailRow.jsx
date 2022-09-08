import Box from '@mui/material/Box';
import StatsGridCard from '../../components/StatsGridCard';

const stat = [
  {
    category: 'Inventory',
    more: '',
    details: [
      {
        count: '298',
        description: 'Medicine ID',
      },
      {
        count: '24',
        description: 'Medicine Groups',
      },
    ],
  },
  {
    category: 'Inventory in Qty',
    more: 'Send Stock Request',
    details: [
      {
        count: '298',
        description: 'Lifetime Supply',
      },
      {
        count: '290',
        description: 'Lifetime Sales',
      },
      {
        count: '08',
        description: 'Stock Left',
      },
    ],
  },
];

const DetailRow = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 3,
        mt: 2,
      }}
    >
      {stat.map(({ category, more, details }) => (
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
