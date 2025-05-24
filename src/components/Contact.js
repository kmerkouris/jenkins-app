import React from 'react';
import { Container, Box, Typography, Link, Paper } from '@mui/material';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#1a237e', textAlign: 'center' }}
        >
          Contact
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">
            <strong>LinkedIn:</strong>{' '}
            <Link
              href="https://linkedin.com/in/konstantinos-merkouris-a576a4281"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="primary"
            >
              linkedin.com/in/konstantinos-merkouris-a576a4281
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">
            <strong>Phone:</strong> 6947323404
          </Typography>
        </Box>

        <Typography variant="h6">
          <strong>Email:</strong>{' '}
          <Link href="mailto:ntinosmerkk@gmail.com" underline="hover" color="primary">
            ntinosmerkk@gmail.com
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
