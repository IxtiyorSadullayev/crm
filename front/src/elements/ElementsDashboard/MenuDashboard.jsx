import React from 'react'
import {Box, Button, Drawer, Typography} from '@mui/material'
import AccardionElement from '../accardion'
import ListDrawer from '../drawer'

let teachers = [
    {
        text: 'Create Teacher',
        link: '/createteacher'
    },
    {
        text: 'List Teachers',
        link: '/listteachers'
    },
    {
        text: 'Teachers Payments',
        link: '/teacherspayments'
    },
    {
        text: 'Teachers Tests',
        link: '/teacherstests'
    },
    {
        text: 'Teachers Students',
        link: 'teachersstudents'
    }
]
let students = [
    {
        text: 'Create Student',
        link: '/createstudent'
    },
    {
        text: 'List Students',
        link: '/liststudents'
    },
    {
        text: 'This month payments',
        link: 'thismonthpayments'
    },
    {
        text: 'Best Students',
        link: 'beststudents'
    }
]
let monitoring = [
    {
        text: 'Tests',
        link: 'tests'
    }
]

function MenuDashboard() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
        <Typography variant='h4'  textAlign={'center'}><Button onClick={()=> setIsDrawerOpen(true)}>CRM platform</Button></Typography>
        <Box>
                <Drawer
                    open={isDrawerOpen}
                    onClose={()=> setIsDrawerOpen(false)}
                    width='300px'
                >
                    <ListDrawer />                   
                </Drawer>
            </Box>
        <br />
        <br />
        <AccardionElement title={'Teachers'} data={teachers}/>
        <AccardionElement title={'Students'} data={students}/>
        <AccardionElement title={'Monitoring'} data={monitoring} />
    </>
  )
}

export default MenuDashboard