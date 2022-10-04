import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import InputElement from '../../elements/InputElement'
import WrapperDashboard from '../../elements/WrapperDashboard'
import client from '../../helpers/axios'

function CreateStudent() {

    const [userName, setUserName] = React.useState('')
    const [firstName, setfirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [dateBorn, setDateBorn] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [teacher_id, setTeacher_id] = React.useState('')
    const [teacher, setTeacher] = React.useState([])
    const [error, setError] = React.useState(false)
    const [data, setData] = React.useState('')
    const changeHandler = async (e) => {
        setTeacher_id(e.target.value)
    }

    const clickHandler = async () =>{
        client.post('/student', {
            teacher_id: teacher_id,
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            dateBorn: dateBorn,
            phone: phone
        })
            .then(res =>{
                setData('Student successufly created')
                setError(false)
                setTeacher_id('')
                setUserName('')
                setfirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setData('')
                setPhone('')
            })
            .catch(err =>{
                if(err.response.status === 400){
                    setData(err.response.data)
                    setError(true)
                }
                if(err.response.status === 500){
                    setData('Internal Server Error or Your Data is not verify \n'+err.response.data)
                    setError(true)
                }
                if(err.response.status === 401){
                    setData('Not Authorization')
                    localStorage.clear();
                    window.location.href = '/login'
                }
            })
    }

    React.useEffect(() => {
        client.get('/teacher')
            .then(res => {
                let data = res.data.map(x=>{
                    return {
                        id: x._id,
                        lastName: x.lastName,
                        fistName: x.firstName
                    }
                })
                setTeacher(data)
            })
            .catch(e => {
                if (e.response.status === 500) {
                    console.log('hato ', e)
                }
                if (e.response.status === 401) {
                    localStorage.clear()
                    window.location.href = '/login'
                }
            })
    }, [])

    return (
        <>

            <WrapperDashboard>
                <h1>Create Student Page</h1>
                <h5 color={!!error? 'red': 'blue'} >{data}</h5>
                <InputElement label={'User Name'} type={'text'} value={userName} setValue={setUserName} />
                <InputElement label={'Last Name'} type={'text'} value={firstName} setValue={setfirstName} />
                <InputElement label={'First Name'} type={'text'} value={lastName} setValue={setLastName} />
                <InputElement label={'Email'} type={'email'} value={email} setValue={setEmail} />
                <InputElement label={'Password'} type={'password'} value={password} setValue={setPassword} />
                <InputElement label={''} type={'date'} value={dateBorn} setValue={setDateBorn} />
                <InputElement label={'Phone'} type={'tel'} value={phone} setValue={setPhone} />

                <FormControl fullWidth>
                <br />
                    <InputLabel id="teacher_id">Teacher</InputLabel>
                    <Select
                        labelId="teacher_id"
                        id="demo-simple-select"
                        label="Teacher"
                        onChange={changeHandler}
                    >

                        {
                            teacher.map(x=>{
                                return <MenuItem value={x.id} key={x.id} >{`${x.fistName} ${x.lastName}`}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <br />
                <br />
            <Button variant='outlined' onClick={clickHandler} >Create Student</Button>
            </WrapperDashboard>
        </>
    )
}

export default CreateStudent