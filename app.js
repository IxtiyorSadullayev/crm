const express = require('express');
const cors = require('cors');

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use('/', require('./routers/crm.router'))
app.use('/teacher', require('./routers/teacher.router'))
app.use('/student', require('./routers/student.router'))
app.use('/science', require('./routers/science.router'))


app.use((req,res,next)=>{
    const error = new Error('Hatolik mavjud')
    next(error)
})

app.use((error, req,res,next)=>{
    res.status(500).json(error.message)
})


module.exports = app;
