import { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
    const scrollTo = (ref: any) => {
        if (ref && ref.current /* + other conditions */) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
            <Toolbar>
                <Button color="inherit" onClick={scrollTo}>Teaching Philosophy</Button>
                <Button color="inherit">Lessons Plans</Button>
                <Button color="inherit">ATL/IB Materials</Button>
            </Toolbar>
            </AppBar>
        </Box>
    );
  }
  
  export default Navbar;