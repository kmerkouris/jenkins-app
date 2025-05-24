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
  Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import profilePic from '../assets/logo.png';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 4, backgroundColor: '#f9f5f5' }}>
        


        <Typography variant="h4" sx={{ fontWeight: 500, mt: 3 }} color="text.secondary">
          Konstantinos Merkouris
        </Typography>

        <Typography variant="h6" sx={{ mt: 1 }} color="text.secondary">
          Full-Stack Software Engineer | Athens, Greece
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          href="#about"
        >
          View My CV
        </Button>

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