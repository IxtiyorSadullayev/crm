const mongoose = require('mongoose');

export const connectDB = async() =>{
    mongoose.connect(process.env.DBURL)
        .then(()=>{
            console.log('Bazaga ulandi')
        })
        .catch(err=>{
            console.log('Bazaga ulanishda hatolik bor \n'+err.message)
        })
}