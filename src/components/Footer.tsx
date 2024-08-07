import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: 'auto', padding: '10px 0', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <Container>
        <Typography variant="body1" color="textSecondary">
          © 2024 Restaurant Inventory Management
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;