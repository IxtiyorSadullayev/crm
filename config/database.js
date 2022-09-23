const mongoose = require('mongoose');

exports.connectDB = async() =>{
    mongoose.connect(process.env.DBURL)
        .then(()=>{
            console.log('Bazaga ulandi')
        })
        .catch(err=>{
            console.log('Bazaga ulanishda hatolik bor \n'+err.message)
        })
}