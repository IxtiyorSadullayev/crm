import React from 'react'
import WrapperDashboard from '../../elements/WrapperDashboard'
import client from '../../helpers/axios'
import Delete from '@mui/icons-material/Delete'
import ShowData from '@mui/icons-material/InventorySharp'
function ListStudent() {
    const [students, setStudents] = React.useState([])
    const [data, setData] = React.useState('')
    const [error, setError] = React.useState(false);
    React.useEffect(()=>{
        client.get('/student')
            .then(res =>{
                console.log(res)
                setStudents(res.data)
            })
            .catch(err =>{
                console.log(err)
                if(err.response.status === 500){
                    setData(err.response.data)
                    setError(true)
                }
                if(err.response.status === 401){
                    localStorage.clear()
                    setData(err.response.data)
                    setError(true)
                    window.location.href = '/login'
                }
            })
    },[students])
    
    return (
        <>
            <WrapperDashboard>
                <h1>List Students Page</h1>
                <Listcha data={students}/>
            </WrapperDashboard>
        </>
    )
}


const Listcha = ({ data }) => {

    const deleteStudent = async (id)=>{
        let tekshir = window.confirm('Are you sure')
        if(tekshir){
            client.delete('/student/'+id)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }
    const showStudent = (id) =>{

    }

    return (
        <table className='listcha_wrapper'>
            <tr>
                <th>T/r</th>
                <th>ID</th>
                <th>Student</th>
                <th>Data Born</th>
                <th>Phone</th>
                <th>Created at</th>
                <th>Actions</th>

            </tr>

            {
                data.map((x, index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{x._id}</td>
                            <td>{`${x.lastName} ${x.firstName}`}</td>
                            <td>{x.dateBorn}</td>
                            <td>{x.phone}</td>
                            <td>{x.createdAt}</td>
                            <td>
                                <Delete onClick={()=> deleteStudent(x._id)} style={{color:'red'}} />
                                <ShowData onClick = {()=> showStudent(x._id)} />
                                 </td>
                        </tr>
                    )
                })
            }


        </table>
    )
}

export default ListStudent