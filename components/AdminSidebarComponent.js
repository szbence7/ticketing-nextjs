"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ListItemText from '@mui/material/ListItemText';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CategoryIcon from '@mui/icons-material/Category';
import BuildIcon from '@mui/icons-material/Build';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from 'next/link';
import { Tooltip } from "@nextui-org/tooltip";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/admin',
  },
  {
    segment: 'tickets',
    title: 'Tickets',
    icon: <ConfirmationNumberIcon />,
    path: '/admin/tickets',
  },
  {
    segment: 'categories',
    title: 'Categories',
    icon: <CategoryIcon />,
    path: '/admin/categories',
  },
  {
    segment: 'partners',
    title: 'Partners',
    icon: <HandshakeIcon />,
    path: '/admin/partners',
  },
  {
    segment: 'tools',
    title: 'Tools',
    icon: <BuildIcon />,
    path: '/admin/tools',
  },
];

export default function AdminSidebarComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(!isMobile);

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const renderNavItem = (item) => {
    const content = (
      <Link href={item.path} passHref>
        <ListItemButton>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </Link>
    );

    if (!open) {
      return (
        <Tooltip key={item.segment} content={item.title} placement="right" closeDelay={200}>
          {content}
        </Tooltip>
      );
    }

    return content;
  };

  return (
    <Drawer variant="permanent" open={open}>
      {!isMobile && (
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
      )}
      <Divider />
      <List component="nav">
        {NAVIGATION.map((item) => renderNavItem(item))}
      </List>
    </Drawer>
  );
}