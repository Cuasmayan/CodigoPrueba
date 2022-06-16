import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import Grid from '@mui/material/Grid';
import AppBar from '../commonComponents/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import '../commonComponents/crear.css';

const Formulario = ({crearContacto}) =>{
    
    //Crear state de Citas
    const [contacto, actualizarContacto] = useState({

        id: 0,
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',   
        celular: '',
        direccion: '',
        cargo: ''

    });

    //Crear state de errores
    const [error, actualizarError] = useState(false)
    
    
    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarContacto({
            ...contacto,
            [e.target.name]: e.target.value
        })

    }

    //Extraer los valores
    const { id, nombre, apellido, correo, telefono, celular, direccion, cargo} = contacto;

    
    const submitContacto = e => {

        e.preventDefault();

        console.log(nombre);

        //Validar
        if(nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || telefono.trim() === '' || celular.trim() === '' 
        || direccion.trim() === '' ||  cargo.trim() === '' ){
            actualizarError(true);
            return;
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contacto)
        }
        fetch('http://localhost:4000', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        

        //Eliminar el mensaje de error
        actualizarError(false);

        //Asignar un ID
        contacto.id = uuid();
      
        //Crear la cita
        crearContacto(contacto); 

        //Reiniciar el form
        actualizarContacto({

            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',   
            celular: '',
            direccion: '',
            cargo: ''
        });
    }

    //consulta
    const requestInit = {
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(contacto)


    }

    

    return (
        <div >
        <AppBar></AppBar>
        <Fragment>
            <div className="main-container">
            <h1>Crear contacto</h1>
            <Grid container spacing={2}>
            

            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

            
            <form onSubmit={submitContacto}>

            <Grid item xs={4}> 
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre"
                    onChange={actualizarState}
                    value={nombre}
                />
                </Grid>
                <Grid item xs={4}>
                 <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    className="u-full-width"
                    placeholder="apellido"
                    onChange={actualizarState}
                    value={apellido}
                />
                </Grid>
                
                <Grid item xs={4}>
                 <label>Correo</label>
                <input
                    type="text"
                    name="correo"
                    className="u-full-width"
                    placeholder="correo"
                    onChange={actualizarState}
                    value={correo}
                />
                </Grid>
                <Grid item xs={4}>
                 <label>Telefono</label>
                <input
                    type="text"
                    name="telefono"
                    className="u-full-width"
                    placeholder="telefono"
                    onChange={actualizarState}
                    value={telefono}
                />
                </Grid>
                <Grid item xs={4}>
                 <label>Celular</label>
                 <input
                    type="text"
                    name="celular"
                    className="u-full-width"
                    placeholder="celular"
                    onChange={actualizarState}
                    value={celular}
                />
                </Grid>

                <Grid item xs={4}>
                 <label>Direccion</label>
                 <input
                    type="text"
                    name="direccion"
                    className="u-full-width"
                    placeholder="direccion"
                    onChange={actualizarState}
                    value={direccion}
                />
                </Grid>

                <Grid item xs={4}>
                 <label>Cargo</label>
                 <input
                    type="text"
                    name="cargo"
                    className="u-full-width"
                    placeholder="cargo"
                    onChange={actualizarState}
                    value={cargo}
                /> 
                </Grid>
           
               <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState} 
               >Agregar contacto</button>
            </form>
            </Grid>
            </div>
            <Button variant="contained" href="/miLibreta">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Regresar
          </Typography>
          </Button>
        </Fragment>
        </div>
        
    );
}

export default Formulario;