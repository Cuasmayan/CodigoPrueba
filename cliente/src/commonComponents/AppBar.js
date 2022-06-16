import React  from 'react';
import AppBar1 from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function appBar() {

 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar1 position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi libreta de contactos
          </Typography>
          <Button color="inherit"><a  href="/" >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Salir
          </Typography>
            
            </a></Button>
        </Toolbar>
      </AppBar1>
    </Box>
  );
}