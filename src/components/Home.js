// Home.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Dialog,
  DialogContent,
  Paper,
  IconButton,
  Button,
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import profilePic from '../assets/logo.png';



export default function Home({ toggleTheme, mode }) {
  const [open, setOpen] = useState(false);




  const [profile, setProfile] = useState({
    name: 'Loading...',
    role: '',
    location: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(() => setProfile({
        name: 'Unavailable',
        role: 'Error fetching profile',
        location: ''
      }));
  }, []);

  

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, backgroundColor: '#f7f9fc' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box
            sx={{
              width: 160,
              height: 160,
              borderRadius: '50%',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '4px solid #1976d2',
              transition: 'transform 0.4s ease-in-out',
              '&:hover': {
                transform: 'scale(1.15)',
              },
            }}
            onClick={() => setOpen(true)}
          >
            <Box
              component="img"
              src={profilePic}
              alt="Konstantinos Merkouris"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600 }} color="text.primary">
              {profile.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {profile.role} | {profile.location}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" sx={{ mt: 4 }} href="#about">
            View My CV
          </Button>
        </Box>

        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogContent sx={{ position: 'relative', p: 0 }}>
            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={profilePic}
              alt="Zoomed"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </DialogContent>
        </Dialog>
      </Paper>
    </Container>
  );
}