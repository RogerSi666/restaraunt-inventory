import React from 'react';
import { Container, Typography } from '@mui/material';

const InventoryPage: React.FC = () => {
  return (
    <Container
    >
      <Typography variant="h4" gutterBottom>
        Inventory
      </Typography>
      <p>This is the inventory page.</p>
    </Container>
  );
};

export default InventoryPage;
