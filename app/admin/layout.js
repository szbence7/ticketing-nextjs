import Box from '@mui/material/Box';
import AdminSidebarComponent from '@/components/AdminSidebarComponent';
import AdminThemeProvider from '@/components/AdminThemeProvider';
import AdminMainContent from '@/components/AdminMainContent';
import NavbarComponent from '@/components/NavbarComponent';

export default function DashboardLayout({ children }) {
  return (
    <AdminThemeProvider>
      <Box sx={{ display: 'flex' }}>
        <AdminSidebarComponent />
        <AdminMainContent>
        <NavbarComponent />
          <Box sx={{ p: 4 }}>
            {children}
          </Box>
        </AdminMainContent>
      </Box>
    </AdminThemeProvider>
  );
}

