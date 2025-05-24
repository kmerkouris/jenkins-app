import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

export default function Skills() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#003366', textAlign: 'center' }}
        >
          Technical Skills
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#1e3a8a' }}>
            <strong>Languages & Frameworks:</strong>
          </Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            Java, C, C++, Python, JavaScript, SQL, CSS, Assembly, React.js, Node.js
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#1e3a8a' }}>
            <strong>Tools & Platforms:</strong>
          </Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            Docker, Jenkins, GitLab, YAML, AsciiDoc, VirtualBox, Cisco Routers, ITSM Tools
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
