// components/Projects.js
import React from 'react';
import { Typography, Grid, Card, CardContent, Container, Box, IconButton, Tooltip } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projectImg from '../assets/project.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project with demo and GitHub.',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/yourusername/project-one',
    image: projectImg,
  },
  {
    title: 'Project Two',
    description: 'Another amazing project with demo and GitHub.',
    demoLink: 'https://demo-link.com',
    githubLink: '',
    image: projectImg,
  },
  {
    title: 'Project One',
    description: 'A cool project with demo and GitHub.',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/yourusername/project-one',
    image: projectImg,
  },
  {
    title: 'Project Two',
    description: 'Another amazing project with demo and GitHub.',
    demoLink: 'https://demo-link.com',
    githubLink: '',
    image: projectImg,
  },
  {
    title: 'Project One',
    description: 'A cool project with demo and GitHub.',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/yourusername/project-one',
    image: projectImg,
  },
  {
    title: 'Project Two',
    description: 'Another amazing project with demo and GitHub.',
    demoLink: 'https://demo-link.com',
    githubLink: '',
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
          <Grid item xs={12} md={6} width={350} key={index}>
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
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
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
