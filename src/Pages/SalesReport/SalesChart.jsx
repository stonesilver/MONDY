import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { chartData } from '../../assets/data';
import { curveCardinal } from 'd3-shape';
import StatsGridCard from '../../components/StatsGridCard';

const cardinal = curveCardinal.tension(0.2);

const SalesChart = () => {
  return (
    <StatsGridCard category='Sales Made' bgColor='white.main'>
      <AreaChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 32,
          right: 30,
          left: 0,
          bottom: 32,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='sales'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.3}
        />
        <Area
          type={cardinal}
          dataKey='sales'
          stroke='#82ca9d'
          fill='#82ca9d'
          fillOpacity={0.3}
        />
      </AreaChart>
    </StatsGridCard>
  );
};

export default SalesChart;
