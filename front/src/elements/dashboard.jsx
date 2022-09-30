import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuDashboard from './ElementsDashboard/MenuDashboard'
import {useNavigate} from 'react-router-dom'
import CreateTeacher from '../pages/Teachers/CreateTeacher'
import DashboardHeader from './dashboardHeader'
function DashboardPage() {
    const navigate = useNavigate();
    return (
        <Box className="dashboard">
            <Box className="menuDashboard">
                <MenuDashboard />
            </Box>
            <Box className="windowDashboard">
                <DashboardHeader />
                <Routes>
                    
                    <Route path='/' index element={<h1>Test qani</h1>} />
                    <Route path='createstudent' element={<h1>Create student</h1>} />
                    <Route path='liststudents' element={<h1>List Student</h1>} />
                    <Route path='thismonthpayments' element={<h1>Payments</h1>} />
                    <Route path='createteacher' element={<CreateTeacher />} />
                    <Route path='listteachers' element={<h1>Teachers list</h1>} />
                    <Route path='teacherspayments' element={<h1>Payments Teacher</h1>} />
                    <Route path='teacherstests' element={<h1>Teachers tests</h1>} />
                    <Route path='teachersstudents' element={<h1>Teachers Students</h1>} />
                    <Route path='*' element={<h1>Bosh sahifaga xush kelibsiz</h1>} />

                </Routes>
            </Box>
        </Box>

    )
}

export default DashboardPage