const SendMessage = require('../helpers/sendMessageUser');
const PAYMENT = require('./../models/payment')



exports.addPayment = async (req, res, next) => {
    try {
        const crm = req.crm;
        const {student_id, count, date} = req.body;
        console.log(count)
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
