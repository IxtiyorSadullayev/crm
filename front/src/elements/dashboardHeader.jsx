import { Box, Typography } from '@mui/material'
import React from 'react'
import {useRoutes} from 'react-router-dom'
function DashboardHeader() {
    
  return (
    <Box className="appbar">
        <Typography variant='h5'>Dashboard Crm Platform</Typography>
    </Box>
    )
}

export default DashboardHeader