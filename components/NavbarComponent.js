import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Link, Box, Container, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Badge from '@mui/material/Badge';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const NavbarComponent = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth={false}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexGrow: 1 }}>
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/about">
              About
            </Button>
            {session && (
              <Button color="inherit" component={Link} href="/admin">
                Admin
              </Button>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
            {session ? (
              <>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Button color="primary" variant="contained" component={Link} href="/admin/tickets/create" sx={{ mr: 4 }} startIcon={<AddCircleIcon />}>
                    New Ticket
                  </Button>
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                  <IconButton color="primary" component={Link} href="/admin/tickets/create" sx={{ mr: 4 }}>
                    <AddCircleIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                  <Avatar
                    src={session.user.image}
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                  <Typography variant="body2">
                    Welcome, {session.user.name}
                  </Typography>
                </Box>
                <IconButton size="large" color="inherit" sx={{ mr: 1 }}>
                  
                  <Badge badgeContent={14} color="error">
                  <NotificationsIcon />
                  </Badge>
                  
                </IconButton>
                <Button color="primary" variant="outlined" component={Link} href="/api/auth/signout">
                  Logout
                </Button>
              </>
            ) : (
              <Button color="primary" variant="outlined" component={Link} href="/api/auth/signin">
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarComponent;
