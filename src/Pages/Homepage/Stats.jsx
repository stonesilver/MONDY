import Box from '@mui/material/Box';
import StatItem from './StatItem';
import { ReactComponent as HealthIcon } from '../../assets/svg/health.svg';
import { ReactComponent as PaymentIcon } from '../../assets/svg/payment.svg';
import { ReactComponent as MedicalIcon } from '../../assets/svg/medical.svg';
import { ReactComponent as WarningIcon } from '../../assets/svg/warning.svg';

const stats = [
  {
    icon: <HealthIcon />,
    bold: 'GOOD',
    body: 'Inventory Status',
    caption: 'View Detailed Report',
    color: '#01A7685d',
  },
  {
    icon: <PaymentIcon />,
    bold: 'Rs. 8,55,875',
    body: 'Revenue :Jan 2022',
    caption: 'View Detailed Report',
    color: '#FED6005d',
  },
  {
    icon: <MedicalIcon style={{ fill: '#03A9F5' }} />,
    bold: '298',
    body: 'Medicines Available',
    caption: 'Visit Inventory',
    color: '#03A9F55d',
  },
  {
    icon: <WarningIcon />,
    bold: '01',
    body: 'Medicine Shortage',
    caption: 'Resolve now',
    color: '#F0483E5d',
  },
];

const Stats = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, mt: '1.625rem', mb: 4, px: 5 }}>
      {stats.map(({ icon, bold, body, caption, color }) => (
        <StatItem
          key={bold}
          icon={icon}
          bold={bold}
          body={body}
          caption={caption}
          color={color}
        />
      ))}
    </Box>
  );
};

export default Stats;
