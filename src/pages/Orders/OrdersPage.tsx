import React from 'react';
import { Container, Typography } from '@mui/material';

const OrdersPage: React.FC = () => {
  return (
    <Container
    >
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <p>This is the orders page.</p>
    </Container>
  );
};

export default OrdersPage;
