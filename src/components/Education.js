import React,{ useState, useEffect } from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

export default function Education() {

  const [education , setEducation] = useState({
      header: 'Loading',
      university: '',
      object: '',
      key: ''
    });
  
    useEffect(() => {
        fetch('http://localhost:8080/api/education')
          .then(res => res.json())
          .then(data => setEducation(data))
          .catch(() => setEducation({
            header: 'Unavailable',
            university: 'Error fetching profile',
            object: 'Unavailable',
            key: 'Error fetching profile'
          }));
      }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#003366', textAlign: 'center' }}
        >
          {education.header}
        </Typography>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
            {education.university}
          </Typography>
          <Typography variant="h6" sx={{ color: '#37474f' }}>
            {education.object}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {education.key}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
