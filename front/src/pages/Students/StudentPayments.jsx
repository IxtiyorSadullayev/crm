import React from 'react'
import WrapperDashboard from '../../elements/WrapperDashboard'
import Button from '@mui/material/Button'
import client from '../../helpers/axios'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import ShowData from '@mui/icons-material/InventorySharp'
import InputElement from '../../elements/InputElement'



function StudentPayments() {
    const [payment, setPayment] = React.useState(false)
    const [addpayment, setAddpayment] = React.useState(false)
    const [students, setStudents] = React.useState([])
    const [count, setCount] = React.useState('')
    const [student_id, setStudent_id] = React.useState('')
    const [date, setDate] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [tolovlar, setTolovlar] = React.useState([])
    const paymentbtn = () => {
        setPayment(true)
        setAddpayment(false)
        client.get('/payment')
            .then(res => {
                setTolovlar(res.data)
            })
            .catch(err => {
                switch (err.response.status) {
                    case 400: {
                        break;
                    }
                    case 500: {
                        break;
                    }
                    case 401: {
                        localStorage.clear()
                        window.location.href = '/login'
                    }
                }
            })

    }

    const addpaymentbtn = () => {
        setPayment(false)
        setAddpayment(true)
    }




    React.useEffect(() => {
        client.get('/student')
            .then(res => {
                setStudents(res.data)
            })
            .catch(err => {
                switch (err.response.status) {
                    case 400: {
                        break;
                    }
                    case 500: {
                        break;
                    }
                    case 401: {
                        localStorage.clear()
                        window.location.href = '/login'
                    }
                }
            })


    }, [])

    const studentHundler = (e) => {
        setStudent_id(e.target.value)
    }


    return (
        <>
            <WrapperDashboard>
                <h1>Payments students  {message}  </h1>
                <Button variant='outlined' onClick={paymentbtn} style={{ marginRight: 5 }} >Show Payments</Button>
                <Button variant='outlined' onClick={addpaymentbtn} color='error' >Add Payments</Button>
                {payment ? <Payments data={tolovlar} /> : ''}
                {addpayment ? <AddPayment setMessage={setMessage} studentHundler={studentHundler} setCount={setCount} date={date} setDate={setDate} count={count} students={students} student_id={student_id} /> : ''}
            </WrapperDashboard>
        </>
    )
}


const Payments = ({ data }) => {

    const deleteStudent = async (id) => {
        let tekshir = window.confirm('Are you sure')
        if (tekshir) {
            client.delete('/student/' + id)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    const showStudent = (id) => {

    }


    return (
        <>
            {
                data.length === 0 ? <p>Payments Not Found</p> :
                    <table className='listcha_wrapper' style={{marginTop: 10}}>
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
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{x._id}</td>
                                        <td>{`${x.student_id.lastName} ${x.student_id.firstName}`}</td>
                                        <td>{x.student_id.dateBorn}</td>
                                        <td>{x.student_id.phone}</td>
                                        <td>{x.createdAt}</td>
                                        <td>
                                            <Delete onClick={() => deleteStudent(x._id)} style={{ color: 'red' }} />
                                            <ShowData onClick={() => showStudent(x._id)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </table>
            }
        </>
    )
}


const AddPayment = ({ setMessage, studentHundler, students, student_id, setCount, count, date, setDate }) => {

    const AddPaymentbtn = async () => {

        client.post('/payment', {
            student_id: student_id,
            count: count,
            date: date
        })
            .then(res => {
                // console.log(res)
                setMessage(res.data)
                window.location.href = '/thismonthpayments'
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <>
            <FormControl fullWidth>
                <br />
                <InputLabel id="student_id">Student</InputLabel>
                <Select
                    labelId="student_id"
                    id="demo-simple-select2"
                    label="Student"
                    value={student_id}
                    onChange={studentHundler}
                >

                    {
                        students.map(x => {
                            return <MenuItem value={x._id} key={x._id} >{`${x.firstName} ${x.lastName}`}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <InputElement label={''} setValue={setDate} type={'datetime-local'} value={date} />

            <InputElement label={'Count'} setValue={setCount} type={'number'} value={count} /> <span>Summ</span>
            <br />
            <Button variant='outlined' onClick={AddPaymentbtn} >Payment create</Button>
        </>
    )
}


export default StudentPayments