import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Skills() {
    return (
      <Box sx={{ width:'80%', height: '80vh', margin: 'auto', pt: 30}}>
        <Typography variant="h3" align='center' sx={{fontWeight: 'bold', pb: 3}}>Contact Me</Typography>
        <Typography align='center' fontSize='1.2rem' sx={{fontWeight: 'bold'}}>I would love to hear from you! You can reach me at</Typography>
        <Grid container justifyContent="center" sx={{pt:5}}>
        <Button href="mailto: boqiao.li@mail.mcgill.ca"><EmailIcon /><Typography>&nbsp;boqiao.li@mail.mcgill.ca</Typography></Button>
        <Button href='https://www.linkedin.com/in/richard-li-5946b8136/' target="_blank"><LinkedInIcon /><Typography>&nbsp;LinkedIn</Typography></Button>
        </Grid>
      </Box>
    )
  }

  export default Skills;