
import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function About() {
  
  const [about , setAbout] = useState({
    header: 'Loading...',
    introduction: ''
  });

  useEffect(() => {
      fetch('http://localhost:8080/api/about')
        .then(res => res.json())
        .then(data => setAbout(data))
        .catch(() => setAbout({
          header: 'Unavailable',
          introduction: 'Error fetching profile'
        }));
    }, []);


  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#003366', textAlign: 'center' }}
        >
          {about.header}
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: '#1a237e', textAlign: 'justify' }}
        >
          {about.introduction}
        </Typography>
      </Paper>
    </Container>
  );
}
