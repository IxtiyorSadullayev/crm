import React from 'react'
import WrapperDashboard from '../../elements/WrapperDashboard'
import client from '../../helpers/axios'

function ListScience() {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        setLoading(true)
        client('/science')
            .then(res => {
                setLoading(false)
                setData(res.data)
            })
            .catch(err => {
                setLoading(false)
                switch (err.response.status) {
                    case 500: {
                        console.log('Internal server error')
                    }
                    case 401: {
                        localStorage.clear()
                        window.location.href = '/login'
                    }
                }
            })
    }, [])

    const removeScince = (id) =>{
        client.delete('/science/'+id)
            .then(res=> {
                alert('Science deleted')
                window.location.reload()
            })
            .catch(err=>{
                switch(err.response.status){
                    case 500: {
                        break;
                    }
                    case 401: {
                        localStorage.clear()
                        window.location.href='/login'
                    }
                }
            })
    }
    return (
        <WrapperDashboard>
            <h1>List Sciens</h1>
            {
                loading ? 'Loading' : <table style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <td>Tr</td>
                        <td>id</td>
                        <td>Science name</td>
                        <td>Teachers count</td>
                        <td>Actions</td>
                    </thead>
                    <tbody>
                        {
                            data.map((x, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{x._id}</td>
                                        <td>{x.scienceName}</td>
                                        <td>{x.teachers}</td>
                                        <td onClick={() => removeScince(x._id)}>Del, </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </WrapperDashboard>
    )
}

export default ListScience