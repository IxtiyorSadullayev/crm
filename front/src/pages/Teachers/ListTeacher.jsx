import { Typography } from '@mui/material'
import React from 'react'
import WrapperDashboard from '../../elements/WrapperDashboard'

function ListTeacher() {
    const [data,setData]=React.useState('')

    return (
        <WrapperDashboard>
            <Typography variant='h3' color={'black'}>List Teachers</Typography>
            <Typography color='red'>{data}</Typography>
        </WrapperDashboard>
    )
}

export default ListTeacher