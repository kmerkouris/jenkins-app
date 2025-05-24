import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Drawer,
  List, ListItem, ListItemText, Box, Button, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const sections = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
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
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.background.paper }} elevation={2}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            Konstantinos Merkouris
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              aria-label="menu"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { width: 220 } }}
            >
              <List>
                {sections.map((section) => (
                  <ListItem
                    button
                    key={section.id}
                    onClick={() => handleScroll(section.id)}
                  >
                    <ListItemText primary={section.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box>
            {sections.map((section) => (
              <Button
                key={section.id}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  mx: 1,
                  color: theme.palette.primary.main,
                  textTransform: 'none',
                }}
                onClick={() => handleScroll(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
