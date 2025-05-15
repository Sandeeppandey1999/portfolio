// components/About.js
import React from 'react';
import { Box, Container, Typography, IconButton, Tooltip, Stack } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import about from '../assets/about.jpg';

export default function About() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${about})`,
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
            <Container sx={{ py: 6, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
             Contact Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            I'm always open to new opportunities, collaborations, or just a friendly chat.
          </Typography>

          <Stack direction="column" spacing={2} alignItems="center">
            <Typography variant="body1">
              <FaPhone style={{ marginRight: 8 }} />
              +91 8787038307
            </Typography>
            <Typography variant="body1">
              <FaEnvelope style={{ marginRight: 8 }} />
              sandeeppandey3341@gmail.com
            </Typography>

            <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
              <Tooltip title="LinkedIn">
                <IconButton
                  href="https://linkedin.com/in/sandeep-panday-522230136"
                  target="_blank"
                  color="primary"
                >
                  <FaLinkedin />
                </IconButton>
              </Tooltip>

              <Tooltip title="GitHub">
                <IconButton
                  href="https://github.com/sandeeppandey1999"
                  target="_blank"
                  color="secondary"
                >
                  <FaGithub />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
        </Box>

    );
}