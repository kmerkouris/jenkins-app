// About.js
import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#003366', textAlign: 'center' }}
        >
          Profile
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: '#1a237e', textAlign: 'justify' }}
        >
          Creative and driven full-stack software engineer with a passion for building robust,
          scalable systems. I blend technical precision with a collaborative mindset, always eager
          to explore new tools and enhance development workflows. Motivated by challenges and
          continuous learning, I thrive in dynamic, innovative environments.
        </Typography>
      </Paper>
    </Container>
  );
}
