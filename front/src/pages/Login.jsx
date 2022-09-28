import React, {useEffect, useState} from 'react'
import LoginPage from '../elements/login.page';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);


    const loginuser = async() =>{
      const response = await fetch('https://kun.uz')
      console.log(response)
    }

    return (
    <>
        <LoginPage loginuser={loginuser} data={data}  username={username} setUsername={setUsername} password={password} setPassword={setPassword} loading ={loading} />
    </>
  )
}

export default Login