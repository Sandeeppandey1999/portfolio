// components/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Container sx={{ py: 6, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" fontWeight="bold">About Me</Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
          I'm a passionate developer who enjoys building engaging and useful web applications.
          I specialize in front-end development with React and love experimenting with UI/UX
          design and animation.
        </Typography>
      </motion.div>
    </Container>
  );
}
