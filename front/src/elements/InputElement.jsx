import { TextField } from '@mui/material'
import React from 'react'

function InputElement({label, type, value, setValue}) {
    return (
        <>
            <TextField style={{margin:7}}
                label={label}
                type={type}
                value={value}
                autoComplete='current-password'
                sx={{ width: 300 }}
                onChange={e => setValue(e.target.value)}
                required
            ></TextField>
        </>
    )
}

export default InputElement