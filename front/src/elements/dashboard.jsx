import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuDashboard from './ElementsDashboard/MenuDashboard'
import {useNavigate} from 'react-router-dom'
function DashboardPage() {
    const navigate = useNavigate();
    return (
        <Box className="dashboard">
            <Box className="menuDashboard">
                <MenuDashboard />
            </Box>
            <Box className="windowDashboard">
                <Routes>
                    
                    <Route path='/' index element={<h1>Test qani</h1>} />
                    <Route path='createstudent' element={<h1>Create student</h1>} />
                    <Route path='liststudents' element={<h1>List Student</h1>} />
                    <Route path='thismonthpayments' element={<h1>Payments</h1>} />
                    <Route path='*' element={<h1>Bosh sahifaga xush kelibsiz</h1>} />

                </Routes>
            </Box>
        </Box>

    )
}

export default DashboardPage