import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'

function LoginPage({data, username, password, setUsername, setPassword, loading, loginuser}) {
    const navigate=useNavigate();
  return (
    <div className='wrapper'>
        <Box
            sx={{width:500}}
            className='logincomponent'
        >
            <Typography variant="h6" color='red'>
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
            {data ? <Button sx={{width:200}} color='error' onClick={()=> navigate('/resetpassword')} >Reset Password or Your data</Button>: ""}
        </Box>
    </div>
  )
}

export default LoginPage