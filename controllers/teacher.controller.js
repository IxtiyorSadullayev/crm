const SendMessage = require('../helpers/sendMessageUser');
const TEACHER = require('./../models/teacher');

exports.addTeacher = async(req,res,next) =>{
    try {
        const {} = req.body;       
    } catch (e) {
        SendMessage(res, 500, 'Internal Server Error.')
    }
}



// exports.addTeacher = async(req,res,next) =>{
//     try {
        
//     } catch (e) {
//         SendMessage(res, 500, 'Internal Server Error.')
//     }
// }