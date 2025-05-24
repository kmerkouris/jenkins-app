import React from 'react';
import { Container, Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" disableGutters>
        <Box id="home" sx={{ minHeight: '100vh', py: 6 }}><Home /></Box>
        <Box id="about" sx={{ minHeight: '100vh', py: 6 }}><About /></Box>
        <Box id="experience" sx={{ minHeight: '100vh', py: 6 }}><Experience /></Box>
        <Box id="education" sx={{ minHeight: '100vh', py: 6 }}><Education /></Box>
        <Box id="skills" sx={{ minHeight: '100vh', py: 6 }}><Skills /></Box>
        <Box id="contact" sx={{ minHeight: '100vh', py: 6 }}><Contact /></Box>
      </Container>
    </>
  );
}