import { useState } from "react"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

import solubility from '../images/solubility.pdf'
import gaslaws1 from '../images/gaslaws1.pdf'
import gaslaws2 from '../images/gaslaws2.pdf'
import management from '../images/management.pdf'
import emotional from '../images/emotional.pdf'
import lesson from '../images/lesson.pdf'
import planner from '../images/planner.pdf'
import learning from '../images/learning.png';

import solubilityPicture from '../images/solubility.png';
import gasLawsPicture from '../images/gasLaws.jpg';

function Projects() {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    const handleChange2 = () => {
      setChecked2((prev) => !prev);
    };
    const handleChange3 = () => {
      setChecked3((prev) => !prev);
    };


    return (
      
      <Box sx={{ width:'80%', margin: 'auto', pt: 20}}>
        <Typography variant="h3" sx={{mb: 10, fontWeight: 'bold'}}>Teaching Materials</Typography>
        <Grid container spacing={3}>
          <Grid item xs={11}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 5}}>Lesson Plans</Typography> 
          </Grid>
          <Grid item xs={1}>
            <Button color = "inherit" size = "large" onClick={handleChange} sx={{pb: 2}}>
            {checked === true &&
              <ArrowCircleDownTwoToneIcon />
            }
            {checked === false &&
              <ArrowCircleUpTwoToneIcon />
            }
            </Button>
          </Grid>
        </Grid>
          
          <Divider />
          {checked == true &&
          <Grow in={checked}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={solubilityPicture}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                    Chem 11 Solubility
                  </Typography>
                  <Typography variant="body2">
                    Introduction to the definition of solution chemistry and developing 
                    understanding of basic solubility terms.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={solubility} target='_blank'>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={gasLawsPicture}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                      Gas Laws Day 1
                    </Typography>
                    <Typography variant="body2">
                      Introduction to the various different gas laws and how to apply
                      them through practice problems
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={gaslaws1} target='_blank'>Read More</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={gasLawsPicture}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                      Gas Laws Day 2
                    </Typography>
                    <Typography variant="body2">
                      Introduction to the various different gas laws and how to apply
                      them through practice problems
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={gaslaws2} target='_blank'>Read More</Button>
                  </CardActions>
              </Card>
            </Grid>
          </Grid>
          </Grow>
          }
          <Grid container spacing={3} sx={{mt: 10}}>
          <Grid item xs={11}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 5}}>ATL Materials</Typography> 
          </Grid>
          <Grid item xs={1}>
            <Button color = "inherit" size = "large" onClick={handleChange2} sx={{pb: 2}}>
            {checked === true &&
              <ArrowCircleDownTwoToneIcon />
            }
            {checked === false &&
              <ArrowCircleUpTwoToneIcon />
            }
            </Button>
          </Grid>
        </Grid>
          <Divider />
          {checked2 == true &&
          <Grow in={checked2}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={emotional}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                    Emotional Management
                  </Typography>
                  <Typography variant="body2">
                    Practice strategies to overcome impulsiveness and anger
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={emotional} target='_blank'>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={management}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                      Self Management - Organization Skills
                    </Typography>
                    <Typography variant="body2">
                      Create plans to prepare for events to acheive personal and academic goals
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={management} target='_blank'>Read More</Button>
                  </CardActions>
              </Card>
            </Grid>
          </Grid>
          </Grow>}
          <Grid container spacing={3} sx={{mt: 10}}>
          <Grid item xs={11}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 5}}>IB Materials</Typography> 
          </Grid>
          <Grid item xs={1}>
            <Button color = "inherit" size = "large" onClick={handleChange3} sx={{pb: 2}}>
            {checked === true &&
              <ArrowCircleDownTwoToneIcon />
            }
            {checked === false &&
              <ArrowCircleUpTwoToneIcon />
            }
            </Button>
          </Grid>
        </Grid>
          <Divider />
          {checked3 == true &&
          <Grow in={checked3}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={planner}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                    IBDP Two Year Planner Chemistry
                  </Typography>
                  <Typography variant="body2">
                    Teaching plan for Chemistry
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={planner} target='_blank'>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={learning}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                      Inquiry Based Learning
                    </Typography>
                    <Typography variant="body2">
                      Filler text
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={learning} target='_blank'>Read More</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card style={{backgroundColor: "#001e3c", color: "#a4afba"}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={lesson}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                      Inquiry Lesson
                    </Typography>
                    <Typography variant="body2">
                      Filler text
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={lesson} target='_blank'>Read More</Button>
                  </CardActions>
              </Card>
            </Grid>
          </Grid>
          </Grow>}
      </Box>
    )
  }
  
  export default Projects;