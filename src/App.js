import { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid, Avatar, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import profileImg from './assets/profile.jpeg';
import resumePdf from './assets/Resume-1.png';
import projectImg from './assets/project.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A cool project with demo and GitHub.',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/yourusername/project-one',
    image: projectImg,
  },
];

export default function Portfolio() {
  const [viewResume, setViewResume] = useState(false);

  return (
    <Box sx={{ p: 6 }}>
      {/* Home Dashboard */}
      <motion.div
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" fontWeight="bold">Welcome to My Portfolio</Typography>
        <Avatar src={profileImg} sx={{ width: 100, height: 100, mx: 'auto', mt: 2, boxShadow: 3 }} />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ boxShadow: 4 }}>
                <CardContent>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }} />
                  <Typography variant="h6" sx={{ mt: 2 }}>{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                  <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Button href={project.demoLink} target="_blank" variant="contained" startIcon={<FaExternalLinkAlt />}>
                      Demo
                    </Button>
                    <Button href={project.githubLink} target="_blank" variant="outlined" startIcon={<FaGithub />}>
                      GitHub
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* About and Resume */}
      <motion.div
        style={{ textAlign: 'center', marginTop: '3rem' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" fontWeight="bold">About Me</Typography>
        <Typography sx={{ mt: 1 }}>I am a passionate developer who loves creating web apps and solutions.</Typography>
        <Button sx={{ mt: 2 }} variant="contained" onClick={() => setViewResume(!viewResume)}>
          {viewResume ? 'Hide Resume' : 'View Resume'}
        </Button>
        {viewResume && (
          <Box component="iframe" src={resumePdf} title="Resume" sx={{ width: '100%', height: 400, border: '1px solid #ccc', mt: 2, borderRadius: 2 }}></Box>
        )}
        <Button sx={{ mt: 2 }} href={resumePdf} download variant="outlined">Download Resume</Button>
      </motion.div>
    </Box>
  );
}
