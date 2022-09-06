import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MoreMenu from './MoreMenu';
import MenuItem from './MenuItem';
import Divider from '@mui/material/Divider';
import { ReactComponent as DashboardIcon } from '../../assets/svg/dashboard.svg';
import { ReactComponent as InventoryIcon } from '../../assets/svg/inventory.svg';
import { ReactComponent as ReportIcon } from '../../assets/svg/reports.svg';
import { ReactComponent as ConfigurationIcon } from '../../assets/svg/configuration.svg';
import { ReactComponent as ManagementIcon } from '../../assets/svg/contact-management.svg';
import { ReactComponent as NotificationIcon } from '../../assets/svg/notification.svg';
import { ReactComponent as ChatIcon } from '../../assets/svg/chat.svg';
import { ReactComponent as ApplicationIcon } from '../../assets/svg/application.svg';
import { ReactComponent as CovidIcon } from '../../assets/svg/covid.svg';
import { ReactComponent as HelpIcon } from '../../assets/svg/help.svg';
import { useLocation } from 'react-router-dom';

const menuItems = [
  {
    link: '/dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    link: '/inventory',
    name: 'Inventory',
    icon: <InventoryIcon />,
    subItem: [
      { name: 'List of Medicines', link: '/inventory/medicine-list' },
      { name: 'Medicines Groups', link: '/inventory/medicine-groups' },
    ],
  },

  {
    link: '/reports',
    name: 'Reports',
    icon: <ReportIcon />,
    subItem: [
      { name: 'Sales Report', link: '/report/sales-report' },
      { name: 'Payment Report', link: '/report/payment-report' },
    ],
  },
  {
    link: '/configuration',
    name: 'Configuration',
    icon: <ConfigurationIcon />,
  },
  {
    divider: true,
  },
  {
    link: '/management',
    name: 'Contact Management',
    icon: <ManagementIcon />,
  },
  {
    link: '/notifications',
    name: 'Notifications',
    icon: <NotificationIcon />,
  },
  {
    link: '/chat-with-visitors',
    name: 'Chat With Visitors',
    icon: <ChatIcon />,
  },
  { divider: true },
  {
    link: '/settings',
    name: 'Application Settings',
    icon: <ApplicationIcon />,
  },
  {
    link: '/covid-19',
    name: 'Covid 19',
    icon: <CovidIcon />,
  },
  {
    link: '/help',
    name: 'Get Technical Help',
    icon: <HelpIcon />,
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        flex: '1 1 20%',
        bgcolor: 'secondary.light',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        spacing={1}
        sx={{ bgcolor: 'secondary.main', height: 60, px: 3 }}
      >
        <Box sx={{ width: 42, height: 42 }}>
          <img
            src='/img/brand-logo.webp'
            alt='brand logo'
            sx={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 16, lg: 18 },
            color: 'white.main',
            fontWeight: 600,
          }}
        >
          Pharma One
        </Typography>
      </Stack>
      <Box>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          mb={4}
          px={3}
          mt={4}
        >
          <Stack direction='row' alignItems='center' spacing={2}>
            <Box
              sx={{
                position: 'relative',
                width: '2.625rem',
                height: '2.625rem',
                borderRadius: '4px',
                // overflow: 'hidden',
                '&::before': {
                  content: `''`,
                  position: 'absolute',
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  bgcolor: 'green.main',
                  border: '2px solid #2E3744',
                  bottom: 1,
                  right: 0,
                  transform: 'translateX(7px)',
                  zIndex: '9999',
                },
              }}
            >
              <img
                src='/img/admin.webp'
                alt='admin'
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box>
              <Typography
                variant='body2'
                sx={{ fontWeight: 500, color: 'white.main' }}
              >
                Subash
              </Typography>
              <Typography variant={'caption'} color='yellow.main'>
                Super Admin
              </Typography>
            </Box>
          </Stack>
          <MoreMenu />
        </Stack>
        {menuItems.map(({ link, name, icon, subItem, divider }, index) =>
          divider ? (
            <Divider key={index} sx={{ my: 2, bgcolor: 'white.main' }} />
          ) : (
            <MenuItem
              key={index}
              link={link}
              name={name}
              icon={icon}
              subItem={subItem}
              pathname={pathname}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
