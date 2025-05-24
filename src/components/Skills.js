import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Skills() {
  return (
    <Box sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Technical Skills
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Languages & Frameworks:</strong> Java, C, C++, Python, JavaScript, SQL, CSS, Assembly, React.js, Node.js
      </Typography>
      <Typography variant="body1">
        <strong>Tools & Platforms:</strong> Docker, Jenkins, GitLab, YAML, AsciiDoc, VirtualBox, Cisco Routers, ITSM Tools
      </Typography>
    </Box>
  );
}