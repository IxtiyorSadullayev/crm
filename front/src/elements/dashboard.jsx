import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuDashboard from './ElementsDashboard/MenuDashboard'

function DashboardPage() {
    return (
        <Box className="dashboard">
            <Box className="menuDashboard">
                <MenuDashboard />
            </Box>
            <Box className="windowDashboard">
                <Routes>
                    <Route path='dashboard/tests' element={<h1>Test qani</h1>} />
                </Routes>
            </Box>
        </Box>

    )
}

export default DashboardPage