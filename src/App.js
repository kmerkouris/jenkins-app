import React from 'react';
import { Container, Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box id="about"><About /></Box>
        <Box id="experience"><Experience /></Box>
        <Box id="education"><Education /></Box>
        <Box id="skills"><Skills /></Box>
      </Container>
    </>
  );
}
