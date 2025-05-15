// components/Projects.js
import React from 'react';
import { Typography, Grid, Card, CardContent, Container, Box, IconButton, Tooltip, Divider } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projectImg from '../assets/project.jpg';

const projects = [
  {
    title: 'Kumbh Mela Management System',
    description: 'A real-time GIS-based dashboard built using React.js, Spring Boot, and PostgreSQL to monitor crowd density and support disaster management during the Kumbh Mela.',
    demoLink: 'https://voip.coraltele.com/',
    githubLink: 'https://github.com/Sandeeppandey1999',
    image: projectImg,
  },
  {
    title: 'IVR Call Management System (IRIS & Manager)',
    description: 'An interactive voice response platform supporting call routing and real-time monitoring, built using Java, Spring Boot, and PostgreSQL.',
    demoLink: 'https://voip.coraltele.com/manager/',
    githubLink: '',
    image: projectImg,
  },
  {
    title: 'TextToSpeech & SpeechToText',
    description: 'A web application that converts text to speech and vice versa, built using React.js and Java Spring Boot. This project showcases my skills in integrating AI technologies into web applications.',
    demoLink: 'https://sandeeppandey1999.github.io/TextToSpeech/',
    githubLink: 'https://github.com/Sandeeppandey1999/TextToSpeech',
    image: projectImg,
  },
  {
    title: 'SnakeGame',
    description: 'A fun and interactive Snake Game built using React.js. This project demonstrates my skills in game development and UI design.',
    demoLink: 'https://sandeeppandey1999.github.io/SnakeGame/',
    githubLink: 'https://github.com/Sandeeppandey1999/SnakeGame',
    image: projectImg,
  },
  {
    title: 'welcometoindia',
    description: 'A travel website built using React.js and Java Spring Boot, showcasing various tourist destinations in India. This project highlights my skills in web development and UI design.',
    demoLink: 'https://sandeeppandey1999.github.io/welcometoindia/',
    githubLink: 'https://github.com/Sandeeppandey1999/welcometoindia',
    image: projectImg,
  },
  {
    title: 'Chatbot',
    description: 'A chatbot application built using React.js and Java Spring Boot, This project demonstrates my ability to create interactive and user-friendly applications.',
    demoLink: 'https://sandeeppandey1999.github.io/chatbot_react/',
    githubLink: 'https://github.com/Sandeeppandey1999/chatbot_react',
    image: projectImg,
  },
];

export default function Projects() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={6}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} width={350}  key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 4 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{mt:4, mb:4}}>{project.title}</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Tooltip title="View Demo">
                      <IconButton href={project.demoLink} target="_blank" color="primary">
                        <FaExternalLinkAlt />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View GitHub">
                      <IconButton href={project.githubLink} target="_blank" color="secondary">
                        <FaGithub />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
