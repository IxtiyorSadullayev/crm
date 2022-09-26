const GeneretePassword = require('../helpers/generatePassword');
const GenerateToken = require('../helpers/generateToken');
const sendMessageEmail = require('../helpers/sendEmail');

const SendMessage = require('../helpers/sendMessageUser');
const TEACHER = require('./../models/teacher');

exports.addTeacher = async (req, res, next) => {
    try {
        const { science, phone, password, username, firstName, lastName, email } = req.body;
        const condidate = await CRM.findOne({
            $or:
                [
                    { firstName: firstName }, { lastName: lastName },
                    { email: email }, { username: username },
                    { password: password }, { phone: phone },
                    { science: science }, { science: science },
                    { science: science }
                ]
        });
        if(condidate){
            return SendMessage(res, 400, `Ooops, This Teacher already exist`)
        }
        const saltpass = await GeneretePassword.GeneretePassword(password);
    } catch (e) {
        SendMessage(res, 500, 'Internal Server Error.')
    }
}

exports.getTeachers = async(req, res, next) => {
    try{    
        const crm = req.crm;
        res.status(200).json('Ok')
    } catch (e) {
        SendMessage(res, 500, 'Internal Server Error.')
    }
}