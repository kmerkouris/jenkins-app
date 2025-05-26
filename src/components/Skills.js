import React ,{ useState,useEffect }from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

export default function Skills() {

  const [skills, setSkills] = useState({
    header: 'Loading...',
    languages: '',
    languagestext: '',
    tools: '',
    toolstext: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(() => setSkills({
        header: 'Unavailable',
        languages: 'Unavailable',
        languagestext: 'Unavailable',
        tools: 'Unavailable',
        toolstext: 'Unavailable'
      }));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#003366', textAlign: 'center' }}
        >
          {skills.header}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#1e3a8a' }}>
            <strong>{skills.languages}</strong>
          </Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            {skills.languagestext}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#1e3a8a' }}>
            <strong>{skills.tools}</strong>
          </Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            {skills.toolstext}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
