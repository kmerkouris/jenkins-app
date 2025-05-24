// Home.js
import React, { useState } from 'react';
import { Container, Typography, Dialog, DialogContent, Paper, Avatar, Stack } from '@mui/material';
import profilePic from '../assets/logo.png'; // Replace with actual image path


export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }} color="primary">
          Welcome Page
        </Typography>
        <Stack spacing={2} alignItems="center">
          <Avatar
            alt="Konstantinos Merkouris"
            src={profilePic}
            sx={{ width: 100, height: 100, cursor: 'pointer' }}
            onClick={() => setOpen(true)}
          />
        </Stack>
        <Typography variant="h4" sx={{ fontWeight: 'medium', mt: 4 }} color="text.secondary">
          Konstantinos Merkouris
        </Typography>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
          <DialogContent>
            <img
              src={profilePic}
              alt="Zoomed"
              style={{ width: '100%', height: 'auto' }}
            />
          </DialogContent>
        </Dialog>
      </Paper>
    </Container>
  );
}
