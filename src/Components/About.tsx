import {useState} from "react"

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography'

import profilePic from '../images/profile.jpg'

function About() {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
      <Box sx={{ display: 'flex', width:'80%', margin: 'auto', pt: 30 }}>
        <Box sx={{width:'100%'}}>
          <Grid 
            container spacing={5}
            alignItems="center"
            justifyContent="center"
            >
            <Grid item xs={7}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>My Teaching Philosophy</Typography> 
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                  Throughout my teaching career, a central idea has always guided my awareness 
                  of this profession: You Teach Who You Are. Teaching, to me, is a truly human activity, 
                  in the sense that it must emerge from within one’s internal consciousness. 
                </Typography>
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                  For better or for worse, this profession forces me to project the conditioning of my 
                  soul onto my students. Therefore, to generate truly affective teaching, I must shape 
                  my teaching philosophy based off of the projection of my own core values. 
                </Typography>
                <Typography fontSize='1.1rem'>
                  These core values can be examined through three paths: Intellectual, Emotional, 
                  and Spiritual, which directly reflects the three psychological needs for 
                  adolescents: Competence, Autonomy and Relatedness. 
                </Typography>
                <Button variant="outlined" onClick={handleChange} sx={{mt: 5}}>
                  Read More
                </Button>
            </Grid>
            <Grid item xs={5}>
                <Avatar src={profilePic} sx={{ width: 350, height: 350 }}/>
            </Grid>
            <Grid item xs={12}>
              {checked == true &&
              <Grow in={checked}>
              <Box sx={{width:'100%'}}>
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                Intellectually, I am speaking about how we know and learn, as well as our natural curiosity 
                about how our world works. My teaching philosophy is rooted in constructivism theory, the origin 
                of which is linked to Jean Piaget's theory of cognitive development (Piaget, 1953). I believe it 
                is fundamental for students to construct their own knowledge through guided exploration and inquiry based learning. 
                </Typography>
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                Instead of handing students the information of the curriculum during class, students should explore structured, 
                guided and open inquiry in order to discover the curriculum through their own efforts. By guiding students through 
                the exploration process of knowledge-based learning, students are practicing key concepts that can be translational 
                throughout subjects. More importantly, through inquiry based teaching students are practicing their communication, 
                thinking and personal and social core competencies which will be their main tools of navigating the world. It promotes 
                the natural curiosity we have as life long learners, and engages students in a way that is instrumental to their learning. 
                </Typography>
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                Emotionally, I refer to my SEC (social-emotional competencies), and how that relates to the (SEL) social-emotional learning 
                outcomes of the classroom. SEL is the process whereby students develop essential social and emotional skills, knowledge and 
                attitudes related to the following competencies: self-management, self awareness, social awareness, relationship skills, and
                 responsible decision-making skills. (Markin, G. & Schnoert-Reichl, K) 
                </Typography>
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                My teaching philosophy revolves around developing a strong SEL environment within the classroom through modeling good SEC as 
                the teacher, as well as directed activities aimed at developing the five competencies mentioned above. This will strengthen 
                student’s character strength, force them to think about their purpose and their future trajectories in life, as well as 
                challenge them to develop towards their best selves. 
                </Typography>
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                Finally, by spiritual I am referring to human connections, the way that trust can lead to care, support and a positive environment
                 for all to blossom. I aim to create a supportive learning environment by building a healthy, trusting relationship between 
                 individual students. My classroom will be an environment where student’s fears and vulnerabilities are validated, where they 
                 have space to fail comfortably. It will be an environment where students are modeled the basic elements of care in the classroom, 
                 as well as given the opportunities to practice caring one another, so that they can feel connected on a human level and given a sense of belonging. 
                </Typography>
                <Typography fontSize='1.1rem' sx={{ mb: 3 }}>
                As mentioned above, all adolescents have three basic psychological needs: relatedness, autonomy, and competence. Through focusing on the 
                intellectual, emotional and spiritual aspects of my core values, I aim to develop a classroom environment where students are challenged 
                towards their own success, where they are guided towards emotional resilience, and where they have the safety of developing their individual
                 autonomy while at the same time feel supported and cared for. Teaching is not a trivial profession, requiring constant innovation depending 
                 on the needs of the individual students. However, I believe as long as I teach through the positive aspects of my core values, I will be able 
                 to foster a safe and cared for environment where students are challenged to become masters of their outcomes, emotions, and social interactions.
                </Typography>
              </Box></Grow>}
              <Box sx={{pb: 40}}></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }
  
  export default About;