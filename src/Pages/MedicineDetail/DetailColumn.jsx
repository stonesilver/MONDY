import Stack from '@mui/material/Stack';
import StatsGridCard from '../../components/StatsGridCard';

const stat = [
  {
    category: 'How to use',
    text: 'Take this medication by mouth with or without food as directed by your doctor, usually once daily.',
  },
  {
    category: 'Side Effects',
    text: 'Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor.',
  },
];

const DetailColumn = () => {
  return (
    <Stack spacing={2} mt={2} mb={3}>
      {stat.map(({ category, text }) => (
        <StatsGridCard key={category} category={category} text={text} />
      ))}
    </Stack>
  );
};

export default DetailColumn;
