import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

export default function Experience() {
  return (
    <Box sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
        Experience
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Netcompany-Intrasoft, Athens, Greece | Hybrid
        </Typography>
        <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
          Full Stack Software Engineer (Jul 2024 – Present)
        </Typography>
        <List dense sx={{ pl: 2 }}>
          <ListItem sx={{ display: 'list-item' }}>Web development with Node.js, React.js, and Docker</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Maintained CI/CD pipelines with Jenkins and GitLab</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Configured OPA policies and Spring Cloud Gateway</ListItem>
        </List>
        <Typography variant="h5" sx={{ fontStyle: 'italic', mt: 2 }}>
          Junior Full Stack Software Engineer (Intern) (Jan 2024 – Jul 2024)
        </Typography>
        <List dense sx={{ pl: 2 }}>
          <ListItem sx={{ display: 'list-item' }}>Supported development tasks and participated in code reviews</ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Technon
        </Typography>
        <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
          IT Network and Security Engineer (Oct 2023 – Dec 2023)
        </Typography>
        <List dense sx={{ pl: 2 }}>
          <ListItem sx={{ display: 'list-item' }}>Conducted IT audits and configured Cisco routers</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Integrated network systems with VirtualBox and ITSM tools</ListItem>
        </List>
      </Box>
    </Box>
  );
}