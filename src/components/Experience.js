import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, List, ListItem, Paper } from '@mui/material';

export default function Experience() {
  

  const [experience , setExperience] = useState({
       company: 'Loading...',
       jobtitle: '',
       tools1: '',
       tools2: '',
       tools3: '',
       jobtitle2: 'Loading...',
       tools4: '',
       company2: '',
       jobtitle3: 'Loading...',
       tools5: ''
     });

  useEffect(() => {
        fetch('http://localhost:8080/api/experience')
          .then(res => res.json())
          .then(data => setExperience(data))
          .catch(() => setExperience({
            company: 'Unavailable',
            jobtitle: 'Error fetching profile',
            tools1: 'Error fetching profile',
            tools2: 'Error fetching profile',
            tools3: 'Error fetching profile',
            jobtitle2: 'Unavailable',
            tools4:'Error fetching profile',
            company2: 'Error fetching profile',
            jobtitle3: 'Unavailable',
            tools5: 'Error fetching profile'
          }));
      }, []);

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
            {experience.company}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 1 }}>
            {experience.jobtitle}
          </Typography>
          <List dense sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>{experience.tools1}</ListItem>
            <ListItem sx={{ display: 'list-item' }}>{experience.tools2}</ListItem>
            <ListItem sx={{ display: 'list-item' }}>{experience.tools3}</ListItem>
          </List>

          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mt: 2, mb: 1 }}>
            {experience.jobtitle2}
          </Typography>
          <List dense sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>{experience.tools4}</ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
            {experience.company2}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 1 }}>
            {experience.jobtitle3}
          </Typography>
          <List dense sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>{experience.tools5}</ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
}
