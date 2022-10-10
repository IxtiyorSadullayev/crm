const SendMessage = require('../helpers/sendMessageUser');
const payment = require('./../models/payment');
const PAYMENT = require('./../models/payment')



exports.addPayment = async (req, res, next) => {
    try {
        const crm = req.crm;
        const {student_id, count, date} = req.body;
        const newPayment = await PAYMENT.create(
            {
                crm_id: crm._id,
                student_id: student_id,
                count: count, 
                date: date
            }
        )

        SendMessage(res, 201, "Payments successufly created")

    } catch (e) {
        SendMessage(res, 500, "Internal Server Error. error Message \n" + e.message);
    }
};

exports.GetPayment = async (req, res, next) => {
    try {
        const crm = req.crm;
        let payments = await PAYMENT.find({crm_id: crm._id}).populate('student_id')
        payments = payments.filter(x => x.student_id !== null)
        if(!payments  || payments.length===0 ){
            return SendMessage(res, 404, 'Payments Not Found')
        }
        SendMessage(res, 200, payments)

    } catch (e) {
        SendMessage(res, 500, "Internal Server Error. error Message \n" + e.message);
    }
};

