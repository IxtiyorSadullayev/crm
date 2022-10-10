import { Button } from '@mui/material';
import React from 'react'
import InputElement from '../../elements/InputElement'
import WrapperDashboard from '../../elements/WrapperDashboard'
import client from '../../helpers/axios';

function AddScience() {
    const [scienceName, setScienceName] = React.useState('');
    const [data, setData] = React.useState({scienceName: '',_id: ''})
    const [message, setMessage] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const submitHandler = async () => {
        setLoading(true)
        client.post('/science', { scienceName: scienceName })
            .then(res => {
                setScienceName('')
                setLoading(false)
                setMessage('')
                setData(res.data)
            })
            .catch(err => {
                setLoading(false)
                switch (err.response.status) {
                    case 500: {
                        setMessage('Internal Server error')
                        break;
                    }
                    case 401: {
                        setMessage('User not Authorization')
                        localStorage.clear()
                        window.location.href = '/login'
                    }
                }
            })
    }
    return (
        <WrapperDashboard>
            <InputElement key={'science'} label={'Science Name'} type={'name'} value={scienceName} setValue={setScienceName} />
            <br />
            <Button variant='outlined' onClick={submitHandler} style={{ marginTop: 5, marginLeft: 5 }}   >Create  {loading ? 'Loading' : ''} </Button>
            <br />
            <br />
            <p>
                {message}

            </p>
            <p>
                Science name: {data.scienceName}
                <br />
                Science id: {data._id}
            </p>
        </WrapperDashboard>
    )
}

export default AddScience