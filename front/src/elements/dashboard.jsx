import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuDashboard from './ElementsDashboard/MenuDashboard'
import { useNavigate } from 'react-router-dom'
import CreateTeacher from '../pages/Teachers/CreateTeacher'
import DashboardHeader from './dashboardHeader'
import ListTeacher from '../pages/Teachers/ListTeacher'
import TeachersPayments from '../pages/Teachers/TeachersPayments'
import TeachersTests from '../pages/Teachers/TeachersTests'
import TeachersStudents from '../pages/Teachers/TeachersStudents'
import Glavniy from '../pages/Glavniy/Glavniy'
import CreateStudent from '../pages/Students/CreateStudent'
import ListStudent from '../pages/Students/ListStudent'
import StudentPayments from '../pages/Students/StudentPayments'
import BestStudent from '../pages/Students/BestStudent'
import Tests from '../pages/Tests/Tests'
import AddScience from '../pages/Science/AddScience'
import ListScience from '../pages/Science/ListScience'
function DashboardPage() {
    return (
        <Box className="dashboard">
            <Box className="menuDashboard">
                <MenuDashboard />
            </Box>
            <Box className="windowDashboard">
                <DashboardHeader />
                <Routes>

                    <Route path='/' index element={<Glavniy />} />
                    <Route path='createstudent' element={<CreateStudent />} />
                    <Route path='liststudents' element={<ListStudent />} />
                    <Route path='thismonthpayments' element={<StudentPayments />} />
                    <Route path='beststudents' element={<BestStudent />} />
                    <Route path='createteacher' element={<CreateTeacher />} />
                    <Route path='listteachers' element={<ListTeacher />} />
                    <Route path='teacherspayments' element={<TeachersPayments />} />
                    <Route path='teacherstests' element={<TeachersTests />} />
                    <Route path='teachersstudents' element={<TeachersStudents />} />
                    <Route path='tests' element={<Tests />} />
                    <Route path='addscience' element={<AddScience />} />
                    <Route path='listscience' element={<ListScience />} />
                    <Route path='*' element={<h1>Bosh sahifaga xush kelibsiz</h1>} />

                </Routes>
            </Box>
        </Box>

    )
}

export default DashboardPage