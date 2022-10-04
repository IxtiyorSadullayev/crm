import { Typography } from '@mui/material'
import React from 'react'
import ListElements from '../../elements/ListElements'
import WrapperDashboard from '../../elements/WrapperDashboard'
import client from '../../helpers/axios'

function ListTeacher() {
    const [data,setData]=React.useState('')
    const [teachers, setTeachers]=React.useState([])
    React.useEffect(()=>{
        client.get('/teacher')
        .then(res=>{
            setTeachers(res.data)

        })
        .catch(e=>{
            console.log(e)
            if(e.response.status===500){
                setData('Bazaga bog`lanishda qandaydir muammo bor. Qaytadan urinib ko`ring')

            }
            if(e.response.status === 401){
                
                setData('Not Authorization')
                localStorage.clear()
                window.location.href = '/login'
            }
        })
    },[teachers])

    const del = async (id) => {

        let tekshir = window.confirm("Siz rostdan ham o`chirmoqchimisiz ?")
        console.log(tekshir)
        if(tekshir){
            client.delete('/teacher/'+id)
        }
        console.log('/teacher/'+id)
      }
    return (
        <WrapperDashboard>
            <Typography variant='h3' color={'black'}>List Teachers</Typography>
            <Typography color='red'>{data}</Typography>
            <ListElements  data={teachers} del={del} />
        </WrapperDashboard>
    )
}

export default ListTeacher