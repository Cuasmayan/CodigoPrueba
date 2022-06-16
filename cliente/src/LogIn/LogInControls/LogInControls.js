import React, { useState } from 'react';
import './LogInControls.css';
import logo from '../../Resources/Images/libreta.JPG';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


// my components
import PasswordInput from './PasswordInput/Password';

// constants
const EMPTY_MESSAGE = "Este campo es obligatorio";

export default function LogInControls() {

    // state
    const [rememberMe, setRememberMe] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({ username: "", password: "" });

        // state handlers
        const handleCheck = (setFunction) => {
            return (event) => { setFunction(event.target.checked) }
        }
        const handleChange = (setFunction) => {
            return (event) => { setFunction(event.target.value) }
        }
    
        const checkEmptyFields = () => {
            const usernameMessage = username === "" ? EMPTY_MESSAGE : "";
            const passwordMessage = password === "" ? EMPTY_MESSAGE : "";
            setErrorMessage({ username: usernameMessage, password: passwordMessage });
            return username !== "" && password !== "";
        }

        const submit = (event) => {
            event.preventDefault();
            // non empty fields
    
            let empties = checkEmptyFields();
            if (!empties) return false;

            if(username === 'manuela' && password === '123'){
                window.location = '/miLibreta';
                    return true;
            }
            if(username === 'manuela' && password !== '123'){
                setErrorMessage({
                    password: "Contraseña incorrecta",
                    username: "",
                });
            }

            if(username !== 'manuela' ){
                setErrorMessage({
                    username: "Este usuario no se encuentra registrado",
                    password: "",
                });
            }

        }


        return (
        <form className="login-controls-container" onSubmit={submit}>
            <div className="login-controls">
                <img src={logo} alt="logo" />
                <h1>Inicia sesión</h1>
                <Grid container spacing={2}>
                    {/* username */}
                    <Grid item xs={12}>
                        <TextField
                            id="user-name"
                            label="Nombre de usuario"
                            variant="outlined"
                            value={username}
                            onChange={handleChange(setUsername)}
                            fullWidth
                            error={errorMessage.username !== ""}
                            helperText={errorMessage.username}
                        />
                    </Grid>
                    {/* password */}
                    <Grid item xs={12}>
                        <PasswordInput
                            password={password}
                            onChange={handleChange(setPassword)}
                            error={errorMessage.password !== ""}
                            helperText={errorMessage.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div className="flex-space-between">
                            {/* checkbox */}
                            <FormControlLabel
                                label="Recuérdame"
                                control={
                                    <Checkbox color="primary" checked={rememberMe} onChange={handleCheck(setRememberMe)} />
                                }
                            />
                            <Link href="#">¿Olvidó su contraseña?</Link>
                        </div>
                    </Grid>
                </Grid>
                <Button 
                    className='submit'
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Acceder
                </Button>
            </div>
        </form>
    )

}

 