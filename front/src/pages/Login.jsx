import React, {useEffect, useState} from 'react'
import LoginPage from '../elements/login.page';
import client from '../helpers/axios';
import {useNavigate} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const navigate  = useNavigate()

    const loginuser = async() =>{

      // fetch('http://localhost:5000/crm/login',{
      //   method:"POST",
      //   body:{
      //     username: username,
      //     password: password
      //   }
      // }).then(response => console.log(response.body))

      // await axios.post('http://localhost:5000/crm/login', {userName:username, password:password})
      // .then(d=> {
      //   console.log(d)
      // })
      // .catch(e =>{
      //   // console.log(e)
      //   if(e.response.status===400){
      //     console.log(e.response.data)
      //   }
      // })
      setLoading(true)
      client.post('/crm/login', {userName:username, password:password})
        .then(res => {
          localStorage.setItem('token', res.data)
          localStorage.setItem('loggin', 'true')
          setLoading(false)
          window.location.href='/'
        })     
        .catch(e=>{
          setLoading(false)
          setData(e.response.data)
        })
    
    }
 
    return (
    <>
        <LoginPage loginuser={loginuser} data={data}  username={username} setUsername={setUsername} password={password} setPassword={setPassword} loading ={loading} />
    </>
  )
}

export default Login