import Box from '@mui/material/Box';
import { ReactComponent as MedicalIcon } from '../../assets/svg/medical.svg';
import { ReactComponent as PaymentIcon } from '../../assets/svg/payment.svg';
import StatItem from '../../components/StatItem';

const inventory = [
  {
    icon: <PaymentIcon />,
    bold: 'Rs. 8,55,875',
    body: 'Total Sales Report ',
    caption: 'View Detailed Report',
    color: '#FED6005d',
    link: '/reports/sales-report',
  },
  {
    icon: <MedicalIcon style={{ fill: '#03A9F5' }} />,
    bold: '523',
    body: 'Payment Report',
    caption: 'View Full List',
    color: '#03A9F55d',
    link: '/reports/payment-report',
  },
];

const ReportsList = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 4 }}>
      {inventory.map(({ icon, bold, body, caption, color, link }) => (
        <Box key={body} sx={{ width: 'calc(25% - 24px)' }}>
          <StatItem
            key={bold}
            icon={icon}
            bold={bold}
            body={body}
            caption={caption}
            color={color}
            link={link}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ReportsList;
