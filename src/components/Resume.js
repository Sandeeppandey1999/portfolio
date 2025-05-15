// components/Resume.js
import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import resumePdf from '../assets/Resume.pdf';

export default function Resume() {

  return (
    <Container sx={{ py: 6, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" fontWeight="bold">Resume</Typography>
       
        
         
 
        <Box
            component="iframe"
            src={resumePdf}
            title="Resume"
            sx={{ width: '100%', height: 1100, mt: 2, borderRadius: 2, boxShadow: 2 }}
          ></Box>
      
      </motion.div>
    </Container>
  );
}
