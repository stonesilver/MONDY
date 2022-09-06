import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stats from './Stats';
import StatsGrid from './StatsGrid';
import TitleBar from './TitleBar';

const Homepage = () => {
  return (
    <>
      <TitleBar />
      <Stats />
      <StatsGrid />
    </>
  );
};

export default Homepage;
