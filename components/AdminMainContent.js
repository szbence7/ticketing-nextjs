"use client"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AdminMainContent({ children }) {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ mb: 4 }}>
        {children}
      </Container>
    </Box>
  );
}
