import { Button, Typography } from '@mui/material'
import React from 'react'
import InputElement from '../../elements/InputElement'
import WrapperDashboard from '../../elements/WrapperDashboard'
import client from '../../helpers/axios'

function CreateTeacher() {

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const sendteacherdoc = async()=>{
        client.post('/teacher',{
            firstName:firstName, lastName:lastName, email:email, userName:username, password:password, phone:phone
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <WrapperDashboard >
        <Typography variant='h3' color={'black'}>Create Teacher</Typography>
        <InputElement label={'Teacher first name'} type={'text'} value={firstName} setValue={setFirstName}/>
        <InputElement label={'Teacher last name'} type={'text'} value={lastName} setValue={setLastName}/>
        <InputElement label={'Teacher email'} type={'email'} value={email} setValue={setEmail}/>
        <InputElement label={'Teacher username'} type={'text'} value={username} setValue={setUsername}/>
        <InputElement label={'Teacher password'} type={'password'} value={password} setValue={setPassword}/>
        <InputElement label={'Teacher phone'} type={'tel'} value={phone} setValue={setPhone}/>

        <Button variant='outlined' style={{margin:7, width:300}} onClick={()=>sendteacherdoc()} >Create</Button>

    </WrapperDashboard>
  )
}

export default CreateTeacher