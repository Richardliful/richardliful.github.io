import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Title from './Components/Title'

import Container from '@mui/material/Container';

import './App.css';

function App() {
  return (
    <main className='App-body'>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{bgcolor: "#132e4b"}}>
          <Toolbar>
            <Grid 
            container spacing={20}
            alignItems="center"
            justifyContent="center">
              <Grid item>
                <Button color="inherit" onClick={() => {
                    document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' });
                  }}>Teaching Philosophy</Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={() => {
                  document.getElementById('projects')!.scrollIntoView({ behavior: 'smooth' });
                }}>Teaching Materials</Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={() => {
                  document.getElementById('skills')!.scrollIntoView({ behavior: 'smooth' });
                }}>Contact Me</Button>
              </Grid>
            </Grid>
          </Toolbar>
          </AppBar>
      </Box>
      <Container sx = {{mt: 5}}>
        <Title />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
      </Container>
    </main>
  )
}

export default App;
