const {Schema, model} = require('mongoose')
const paymentSchema = new Schema({
    crm_id: {
        type: Schema.Types.ObjectId,
        ref: 'CRM'
    },
    student_id: {
        type: Schema.Types.ObjectId,
        ref: 'STUDENT'
    },
    date: {
        type: Date,
        required: true
    },
    count: {
        type: Number,
        required: [true, 'Please Enter Payments creat vith number']
    }
}, {
    timestamps: true
})

module.exports = model('PAYMENT', paymentSchema)