import React, { useState, useEffect } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import home from '../assets/home.jpg'; // Adjust the path if needed

export default function Home() {
  const [showHotel, setShowHotel] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer | React js & Java Spring Boot | Open Source Contributor';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      const nextChar = fullText.charAt(index);
      if (nextChar) {
        setTypedText(prev => prev + nextChar);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHotel(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
   
      <Container sx={{ py: 6, textAlign: 'center', position: 'relative', zIndex: 2, color: '#fff' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" fontWeight="bold">
            Hi, I'm Sandeep{' '}
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ display: 'inline-block', originY: 0.5 }}
            >
              👋
            </motion.span>
          </Typography>

          <Typography variant="h6" fontWeight="medium" sx={{ mt: 2 }}>
            I'm a passionate developer who enjoys building engaging and useful web applications.
            I specialize in front-end development with React and love experimenting with UI/UX
            design and animation.
          </Typography>

          <Typography variant="h5" sx={{ mt: 4 }}>
            {typedText}
            <span style={{ borderRight: '2px solid white', animation: 'blink 1s step-end infinite' }}></span>
          </Typography>
        </motion.div>

        {showHotel && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h5" fontWeight="medium" sx={{ mt: 4 }}>
              Coral Telecom Limited
            </Typography>
          </motion.div>
        )}

        {/* Cursor blink animation */}
        <style>
          {`
            @keyframes blink {
              from, to { border-color: transparent }
              50% { border-color: white }
            }
          `}
        </style>
      </Container>
    </Box>
  );
}
