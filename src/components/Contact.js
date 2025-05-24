import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
        Contact
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <strong>Your Profile:</strong>{' '}
        <Link href="https://linkedin.com/in/konstantinos-merkouris-a576a4281" target="_blank" rel="noopener">
          linkedin.com/in/konstantinos-merkouris-a576a4281
        </Link>
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <strong>Phone:</strong> 6947323404
      </Typography>
      <Typography variant="h5">
        <strong>Email:</strong>{' '}
        <Link href="mailto:ntinosmerkk@gmail.com">ntinosmerkk@gmail.com</Link>
      </Typography>
    </Box>
  );
}
