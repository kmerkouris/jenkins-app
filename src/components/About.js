import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Profile
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Creative and driven full-stack software engineer with a passion for building robust,
        scalable systems. I blend technical precision with a collaborative mindset, always eager
        to explore new tools and enhance development workflows. Motivated by challenges and
        continuous learning, I thrive in dynamic, innovative environments.
      </Typography>
    </Box>
  );
}
