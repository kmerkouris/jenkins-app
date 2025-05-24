import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Drawer,
  List, ListItem, ListItemText, Box, Button, Avatar, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
import { useTheme } from '@mui/material/styles';

const sections = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={2}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Avatar src={logo} sx={{ width: 50, height: 50, mr: 2 }} />
            <Typography variant="h6" color="primary">
              Konstantinos Merkouris
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List sx={{ width: 200 }}>
                  {sections.map((section) => (
                    <ListItem button key={section.id} onClick={() => handleScroll(section.id)}>
                      <ListItemText primary={section.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box>
              {sections.map((section) => (
                <Button key={section.id} color="primary" onClick={() => handleScroll(section.id)}>
                  {section.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
