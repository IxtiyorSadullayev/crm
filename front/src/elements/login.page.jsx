import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function LoginPage({data, username, password, setUsername, setPassword, loading, loginuser}) {
  return (
    <div className='wrapper'>
        <Box
            sx={{width:500}}
            className='logincomponent'
        >
            <Typography variant="h3" color='red'>
                {data}
            </Typography>
            <TextField
                label="Username"
                type={'text'}
                value={username}
                autoComplete='current-password'
                sx={{width:500}}
                onChange={e=> setUsername(e.target.value)}
            >
            </TextField>
            <br />
            <br />
            <br />
            <TextField
                label="Password"
                type={'password'}
                autoComplete='current-password'
                sx={{width:500}}
                value={password}
                onChange={e=> setPassword(e.target.value)}
            >
            </TextField>
            <br />
            <br />
            <br />
            <Button sx={{width:200}} color='primary' onClick={()=> loginuser()}  variant='outlined' >Submit {loading ? 'Loading': ''}</Button>
        </Box>
    </div>
  )
}

export default LoginPage