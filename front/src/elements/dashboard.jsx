import { Box } from '@mui/material'
import React from 'react'
import MenuDashboard from './ElementsDashboard/MenuDashboard'

function DashboardPage() {
    return (
        <Box className="dashboard">
            <Box className="menuDashboard">
                <MenuDashboard />
            </Box>
            <Box className="windowDashboard">
                Asosiy oynadagilar
            </Box>
        </Box>

    )
}

export default DashboardPage