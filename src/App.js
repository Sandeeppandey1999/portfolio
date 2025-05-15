import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button, Box } from '@mui/material';
import profileImg from './assets/pro.png';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  const [section, setSection] = useState('home');

  const renderSection = () => {
    switch (section) {
      case 'home': return <Home />;
      case 'projects': return <Projects />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'resume': return <Resume />;
      default: return <Home />;
    }
  };

  const navButtonStyle = (tab) => ({
    mx: 1,
    color: section === tab ? '#9ed219' : 'inherit',
    borderBottom: section === tab ? '2px solid #9ed219' : '2px solid transparent',
    borderRadius: 0,
    fontWeight: section === tab ? 'bold' : 'normal',
    transition: 'all 0.3s ease',
  });

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* Fixed AppBar at the top */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <Avatar src={profileImg} sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Sandeep Pandey</Typography>

          <Button onClick={() => setSection('home')} sx={navButtonStyle('home')}>Home</Button>
          <Button onClick={() => setSection('projects')} sx={navButtonStyle('projects')}>Projects</Button>
          <Button onClick={() => setSection('about')} sx={navButtonStyle('about')}>About Me</Button>
          <Button onClick={() => setSection('contact')} sx={navButtonStyle('contact')}>Contact</Button>
          <Button onClick={() => setSection('resume')} sx={navButtonStyle('resume')}>My Resume</Button>
        </Toolbar>
      </AppBar>

      {/* Add padding top to prevent content from hiding behind the fixed AppBar */}
      <Box sx={{ mt: 10 }}>
        {renderSection()}
      </Box>
    </Box>
  );
}
