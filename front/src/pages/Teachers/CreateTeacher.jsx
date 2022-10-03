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
    const [science, setScience] = React.useState('')
    const [loading, setLoading]=React.useState(false)
    const [data, setData] = React.useState('')


    const sendteacherdoc = async()=>{
        setLoading(true)
        client.post('/teacher',{
            firstName:firstName, lastName:lastName, email:email, username:username, password:password, phone:phone, science:[science]
        })
        .then(res=>{
            // console.log(res)
            setData('Teacher created successufly')
            setFirstName('')
            setLastName('')
            setEmail('')
            setUsername('')
            setPassword('')
            setPhone('')
            setScience('')
        })
        .catch(err=>{
            if(err.response.status===400){
                setData(err.response.data)
                setLoading(false)
            }
            if(err.response.status===500){
                setData(err.response.data + ' or your datas is not complect ')
                setLoading(false)
            }
            if(err.response.status===401){
                localStorage.clear()
                window.location.href='/login'
            }
        })
    }

  return (
    <WrapperDashboard >
        <Typography variant='h3' color={'black'}>Create Teacher</Typography>
        <Typography color='red'>{data}</Typography>

        <InputElement label={'Teacher first name'} type={'text'} value={firstName} setValue={setFirstName}/>
        <InputElement label={'Teacher last name'} type={'text'} value={lastName} setValue={setLastName}/>
        <InputElement label={'Teacher email'} type={'email'} value={email} setValue={setEmail}/>
        <InputElement label={'Teacher username'} type={'text'} value={username} setValue={setUsername}/>
        <InputElement label={'Teacher password'} type={'password'} value={password} setValue={setPassword}/>
        <InputElement label={'Teacher phone'} type={'tel'} value={phone} setValue={setPhone}/>
        <InputElement label={'Teacher science'} type={'text'} value={science} setValue={setScience}/>


        <Button variant='outlined' style={{margin:7, width:300}} onClick={()=>sendteacherdoc()} >Create {loading?'Loading':''}</Button>

    </WrapperDashboard>
  )
}

export default CreateTeacher