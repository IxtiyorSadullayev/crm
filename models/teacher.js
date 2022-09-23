const mongoose = require('mongoose')


const teacherSchema = new mongoose.Schema({
    crm:{type: mongoose.Schema.Types.ObjectId, ref:'CRM'},
    lastName: {type: [String, 'Enter Teacher last name'], required:true, },
    firstName: {type: [String, 'Enter Teacher first name'], required:true, },
    username: {type: [String, 'Enter Teacher username'], required:true, unique:true},
    password: {type: [String, 'Enter Teacher password'], required: true},
    phone: {type: [String, 'Enter Teacher phone'], required: true, unique:true},
    science:{type:[String,'Enter Teacher science'], required: true}
},{
    timestamps:true
})

module.exports = mongoose.model('TEACHER', teacherSchema);