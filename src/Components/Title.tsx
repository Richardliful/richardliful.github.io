import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import resume from '../images/resume.pdf'

function Title() {
    return (
      <Box sx={{ display: 'flex', width:'80%', height: '80vh', margin: 'auto' }}>
          <Grid 
            container spacing={5}
            alignItems="center"
            justifyContent="center"
            >
            <Grid item xs={8}>
                <Typography sx={{ mb: 2 }}>Hi, my name is</Typography>
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>Richard Li.</Typography> 
                <Typography fontSize='1.2rem'>I am a teacher with a Bachelors in <b>chemistry</b> and entrepreneurship, with over 6 years
                    of teaching experience in child care centers and schools. 
                </Typography>
                <Button variant="outlined" sx={{mt: 5}} href={resume} target='_blank'>Checkout my Resume!</Button>
            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
      </Box>
    )
  }
  
  export default Title;