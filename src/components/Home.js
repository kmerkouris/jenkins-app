// Home.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Dialog,
  DialogContent,
  Paper,
  Avatar,
  Stack,
  IconButton,
  Button,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import profilePic from '../assets/logo.png';

const sections = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Home({ toggleTheme, mode }) {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setDrawerOpen(false);
    }
  };

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
              Konstantinos Merkouris
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Full-Stack Software Engineer | Athens, Greece
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
