import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';

// icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function PasswordInput({ password, onChange, error, helperText }) {

    // state
    const [showPassword, setShowPassword] = useState(false);
    // handle state change
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <FormControl fullWidth variant="outlined" error={error}>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={(event) => {event.preventDefault();}}
                            edge="end"
                        >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={80}
            />
            <FormHelperText error>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default PasswordInput;