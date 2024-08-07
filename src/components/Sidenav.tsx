import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import OrdersIcon from '@mui/icons-material/ListAlt';
import SuppliersIcon from '@mui/icons-material/Group';
import ReportsIcon from '@mui/icons-material/BarChart';

export default function Sidenav() {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen);
  // };
  // const DrawerList = (
  //   <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
  //     <List>
  //       <ListItem button component={NavLink} to="/">
  //         <ListItemIcon><DashboardIcon /></ListItemIcon>
  //         <ListItemText primary="Dashboard" />
  //       </ListItem>
  //       <ListItem button component={NavLink} to="/inventory">
  //         <ListItemIcon><InventoryIcon /></ListItemIcon>
  //         <ListItemText primary="Inventory" />
  //       </ListItem>
  //       <ListItem button component={NavLink} to="/orders">
  //         <ListItemIcon><OrdersIcon /></ListItemIcon>
  //         <ListItemText primary="Orders" />
  //       </ListItem>
  //       <ListItem button component={NavLink} to="/suppliers">
  //         <ListItemIcon><SuppliersIcon /></ListItemIcon>
  //         <ListItemText primary="Suppliers" />
  //       </ListItem>
  //       <ListItem button component={NavLink} to="/reports">
  //         <ListItemIcon><ReportsIcon /></ListItemIcon>
  //         <ListItemText primary="Reports" />
  //       </ListItem>
  //     </List>
  //   </Box>
  // );
  // return (
  //   <div>
  //     <Button
  //       sx={{ display: 'flex' }}
  //       onClick={toggleDrawer(true)}>
  //       Menu
  //     </Button>
  //     <Drawer open={open} onClose={toggleDrawer(false)}>
  //       {DrawerList}
  //     </Drawer>
  //   </div>
  // );
  return (
    <Drawer sx={{ width: 250,  flexShrink: 0,
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        height: '100vh',
        // boxShadow: '10px 10px 10px gray' 
      }, }} 
      variant="permanent"
      anchor="left"
      >
        <Box sx={{ overflow: 'auto' }}>

      <List>
        <ListItem button component={NavLink} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/inventory">
          <ListItemIcon><InventoryIcon /></ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button component={NavLink} to="/orders">
          <ListItemIcon><OrdersIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={NavLink} to="/suppliers">
          <ListItemIcon><SuppliersIcon /></ListItemIcon>
          <ListItemText primary="Suppliers" />
        </ListItem>
        <ListItem button component={NavLink} to="/reports">
          <ListItemIcon><ReportsIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
      </Box>
    </Drawer>
  );
};


