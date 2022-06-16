import React from 'react';
import './LogIn.css';
import Grid from '@mui/material/Grid';
import LogInControls from './LogInControls/LogInControls'

function LogInImage() {
    return (
        <div className="login-image-container"></div>
    )
}

export default  function LogIn() {
    
    return (
        <div className="login-page">
        <Grid container spacing={0} >
            {/* login image banner */}
            <Grid item md={6}>
                    <LogInImage/>
                </Grid>
            {/* login controls */}

            <Grid item xs={6}>
            <LogInControls/>
            </Grid>
        </Grid>
    </div>
    )
}