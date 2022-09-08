import Box from '@mui/material/Box';
import { ReactComponent as MedicalIcon } from '../../assets/svg/medical.svg';
import { ReactComponent as WarningIcon } from '../../assets/svg/warning.svg';
import StatItem from '../../components/StatItem';

const inventory = [
  {
    icon: <MedicalIcon style={{ fill: '#03A9F5' }} />,
    bold: 'R298',
    body: 'Medicines Available',
    caption: 'View Full List',
    color: '#03A9F55d',
  },
  {
    icon: <MedicalIcon style={{ fill: '#01A768' }} />,
    bold: '02',
    body: 'Medicine Groups',
    caption: 'View Groups',
    color: '#01A7685d',
  },
  {
    icon: <WarningIcon />,
    bold: '01',
    body: 'Medicine Shortage',
    caption: 'Resolve now',
    color: '#F0483E5d',
  },
];

const InventoryList = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 4, px: 5 }}>
      {inventory.map(({ icon, bold, body, caption, color }) => (
        <Box
          key={body}
          sx={{ width: 'calc(25% - 24px)'}}
        >
          <StatItem
            key={bold}
            icon={icon}
            bold={bold}
            body={body}
            caption={caption}
            color={color}
          />
        </Box>
      ))}
    </Box>
  );
};

export default InventoryList;
