const {Schema, model} = require('mongoose')


const teacherSchema = new Schema({
    crm_id:{type: Schema.Types.ObjectId, ref:'CRM'},
    lastName: {required: [true, 'Enter Teacher last name'], type: String, },
    firstName: {required: [true, 'Enter Teacher first name'], type: String, },
    username: {required: [true, 'Enter Teacher username'], type: String, unique:true},
    password: {required: [true, 'Enter Teacher password'], type: String},
    phone: {required: [true, 'Enter Teacher phone'], type: String, unique:true},
    science:{required:[true,'Enter Teacher science'], type: [String]},
    email:{type: String, required: [true, "Enter Teacher email"], unique: true}
},{
    timestamps:true
})
 
module.exports = model('TEACHER', teacherSchema);