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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h4" fontWeight="bold"> 💼 About Me</Typography>
                    <Typography variant="body1" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>

                        I'm Sandeep Pandey, a Full Stack Developer with 3 years of hands-on experience in building scalable and performant web applications. My technical expertise lies in React.js, Java Spring Boot, and Microservices Architecture. I’m passionate about crafting intuitive UIs, writing clean code, and implementing real-time features like chat and video calls. I enjoy collaborating in Agile teams and constantly explore better ways to build fast, secure, and user-centric web solutions.
                    </Typography>
                </motion.div>
            </Container>
        </Box>

    );
}