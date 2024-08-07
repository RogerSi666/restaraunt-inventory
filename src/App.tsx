import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import InventoryPage from './pages/Inventory/InventoryPage';
import OrdersPage from './pages/Orders/OrdersPage';
import SuppliersPage from './pages/Suppliers/SuppliersPage';
import ReportsPage from './pages/Reports/ReportsPage';
import Sidenav from './components/Sidenav';
import Footer from './components/Footer';
import { CssBaseline, Box, Container } from '@mui/material';

const App: React.FC = () => {
  const drawerWidth = 250;

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />

        <Box sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: `${drawerWidth}px`,
        }} component="main">
          <Container sx={{ flexGrow: 1, py: 3 }}>

            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/suppliers" element={<SuppliersPage />} />
              <Route path="/reports" element={<ReportsPage />} />
            </Routes>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Router>
  );
}
export default App;
