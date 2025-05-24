import React from 'react';
import { Container, Box, Typography, List, ListItem, Paper } from '@mui/material';

export default function Experience() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#002147', textAlign: 'center' }}
        >
          Experience
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
            Netcompany-Intrasoft, Athens, Greece | Hybrid
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 1 }}>
            Full Stack Software Engineer (Jul 2024 – Present)
          </Typography>
          <List dense sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>Web development with Node.js, React.js, and Docker</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Maintained CI/CD pipelines with Jenkins and GitLab</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Configured OPA policies and Spring Cloud Gateway</ListItem>
          </List>

          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mt: 2, mb: 1 }}>
            Junior Full Stack Software Engineer (Intern) (Jan 2024 – Jul 2024)
          </Typography>
          <List dense sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>Supported development tasks and participated in code reviews</ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
            Technon
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 1 }}>
            IT Network and Security Engineer (Oct 2023 – Dec 2023)
          </Typography>
          <List dense sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>Conducted IT audits and configured Cisco routers</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Integrated network systems with VirtualBox and ITSM tools</ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
}
