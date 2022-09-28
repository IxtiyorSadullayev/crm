import { Button, TextField, Typography, Box } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import React from 'react'

function ResetPasswordPage({ email, setEmail, data, updateData, loading }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="wrapper">
                <Box
                    sx={{ width: 500 }}
                    className='logincomponent'
                >

                    <Typography variant="h6" color='red'>
                        {data}
                    </Typography>
                    <br />
                    <TextField
                        label="Email"
                        type={'email'}
                        value={email}
                        autoComplete='current-password'
                        sx={{ width: 500 }}
                        onChange={e => setEmail(e.target.value)}
                    >
                    </TextField>
                    <br />
                    <br />
                    <br />

                    <Button sx={{ width: 200 }} color='primary' onClick={() => updateData()} variant='outlined' >Submit {loading ? 'Loading' : ''}</Button>
                    <Button sx={{ width: 200, marginLeft:10 }} color='success' onClick={() => navigate('/loading')} variant='outlined' >Back to Login page {loading ? 'Loading' : ''}</Button>


                </Box>
            </div>
        </>
    )
}

export default ResetPasswordPage