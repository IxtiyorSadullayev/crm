import React from 'react'
import ResetPasswordPage from '../elements/resetPasswordPage'
import client from '../helpers/axios';

const ResetPassword = ()=>{

    const [email, setEmail] = React.useState('');
    const [data, setData] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const updateData = async ()=>{
        setLoading(true)
        client.post('/crm/forgotpass', {email:email})
            .then(res=>{
                console.log(res)
                setData(res.data)
                setLoading(false)
            })
            .catch(e=>{
                setLoading(false)
                setData(e.response.data)
              })
    };

    return(
        <>
            <ResetPasswordPage email={email} data={data} setEmail={setEmail} updateData={updateData} loading={loading} />
        </>
    )
}

export default ResetPassword