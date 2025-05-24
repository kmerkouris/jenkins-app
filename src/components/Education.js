import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Education() {
  return (
    <Box sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Education
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        National & Kapodistrian University of Athens
      </Typography>
      <Typography variant="body2">
        BSc in Informatics and Telecommunications (Sep 2018 – Present)
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Key subjects: Software Engineering, Networks, Algorithms, Web Development
      </Typography>
    </Box>
  );
}