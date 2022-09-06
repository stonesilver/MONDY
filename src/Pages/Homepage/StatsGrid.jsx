import Box from '@mui/material/Box';
import StatsGridCard from './StatsGridCard';

const stat = [
  {
    category: 'Inventory',
    more: 'Go to Configuration',
    details: [
      {
        count: '298',
        description: 'Total no of Medicines',
      },
      {
        count: '24',
        description: 'Medicine Groups',
      },
    ],
  },
  {
    category: 'Quick Report',
    more: 'January 2022',
    details: [
      {
        count: '70,865',
        description: 'Qty of Medicines Sold',
      },
      {
        count: '5,288',
        description: 'Invoices Generated',
      },
    ],
  },
  {
    category: 'My Pharmacy',
    more: 'Go to Configuration',
    details: [
      {
        count: '04',
        description: 'Total no of Suppliers',
      },
      {
        count: '05',
        description: 'Total no of Users',
      },
    ],
  },
  {
    category: 'Customers',
    more: 'Go to Customers Page',
    details: [
      {
        count: '845',
        description: 'Total no of Customers',
      },
      {
        count: 'Adalimumab',
        description: 'Frequently bought Item',
      },
    ],
  },
];

const StatsGrid = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.625rem 2rem',
        bgcolor: 'white.main',
        px: 5,
        py: 4,
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

export default StatsGrid;
