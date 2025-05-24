import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

export default function Education() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#003366', textAlign: 'center' }}
        >
          Education
        </Typography>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
            National & Kapodistrian University of Athens
          </Typography>
          <Typography variant="h6" sx={{ color: '#37474f' }}>
            BSc in Informatics and Telecommunications (Sep 2018 – Present)
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>Key subjects:</strong> Software Engineering, Networks, Algorithms, Web Development
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
