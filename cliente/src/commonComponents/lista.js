import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Crear from '../commonComponents/crear';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(nombre, apellido, correo, telefono, celular, direccion, cargo, acciones) {
  return { nombre, apellido, correo, telefono, celular, direccion, cargo, acciones };
}

const rows = [
  createData('Sebastian', 'Sebastian', 'sebastian@gmail.com', '4454644', '33456644', 'cra 44 #32-55', 'Odontologo'),
  createData('Camila', 'Feria', 'camila@gmail.com', '4454574', '33246373', 'calle 3 #21-35', 'Profesora'),
];

export default function CustomizedTables({contacto, libreta, setListUpdated}) {

  const handleDelete = id =>{
    const requestInit = {
      method: 'DELETE'
  }
  fetch('http://localhost:4000/' + id, requestInit)
  .then(res => res.text())
  .then(res => console.log(res))
  setListUpdated(true)
  }


  

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellido</StyledTableCell>
            <StyledTableCell align="right">Correo</StyledTableCell>
            <StyledTableCell align="right">Telefono</StyledTableCell>
            <StyledTableCell align="right">Celular</StyledTableCell>
            <StyledTableCell align="right">Dirección</StyledTableCell>
            <StyledTableCell align="right">Cargo</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {libreta.map((libreta) => (
            <StyledTableRow key={libreta.id}>
              <StyledTableCell component="th" scope="row">
                {libreta.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{libreta.apellido}</StyledTableCell>
              <StyledTableCell align="right">{libreta.correo}</StyledTableCell>
              <StyledTableCell align="right">{libreta.telefono}</StyledTableCell>
              <StyledTableCell align="right">{libreta.celular}</StyledTableCell>
              <StyledTableCell align="right">{libreta.direccion}</StyledTableCell>
              <StyledTableCell align="right">{libreta.cargo}</StyledTableCell>
              <StyledTableCell align="right"><>
              <Button startIcon={<EditIcon/>} href="/editar"/>
               <Button startIcon={<DeleteIcon/>} onClick={() => handleDelete(libreta.id)}/> 
               </></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Grid item>
     <Button variant="contained" href="/crear">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crear contacto
          </Typography>
          </Button>
    </Grid>
    </div>
  );
}