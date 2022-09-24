const AsyncError = require('../helpers/asyncError');
const GeneretePassword = require('../helpers/generatePassword');
const GenerateToken = require('../helpers/generateToken');

const SendMessage = require('../helpers/sendMessageUser');
const CRM = require('./../models/crm');


exports.addCrm = async (req,res,next)=>{
    try {
        const {nameCenter, address, userName, phone, password, email } = req.body;
        const condidate = await CRM.findOne({$or:[{userName:userName}, {phone:phone}, {email:email}, {nameCenter:nameCenter}]});
        if(condidate){
          return SendMessage(res, 400, 'This CRM is have us') 
        }
        const saltpass = await GeneretePassword.GeneretePassword(password);
        const newCRM = new CRM({nameCenter:nameCenter, address:address, phone:phone, email:email, password: saltpass, userName:userName});
        await newCRM.save();
        SendMessage(res, 200, newCRM)
    } catch (e) {
        res.status(500).json('Have an Error')
    }
};

exports.login = async(req,res,next)=>{
    try {
        const {userName, password} = req.body;
        const crm = await CRM.findOne({userName});
        const tekshir = await GeneretePassword.ComparePassword(password, crm.password);
        if(!tekshir){
          return SendMessage(res, 404, "CRM is not defined. Meybe your data is wrong." )
        }
        const token = await GenerateToken(crm);
        console.log(token + '11221')
        res.status(200).json(token)
    } catch (e) {
        SendMessage(res, 500, 'Internal Server Error')
    }
};

exports.forgotPassword = async(req,res,next)=>{
    try {
        const {email} = req.body;
        

    } catch (e) {
        res.status(500).json('Have an Error')
    }
};


// exports.addCrm = async(req,res,next)=>{
//     try {
//         res.status(200).json('OK')
//     } catch (e) {
//         res.status(500).json('Have an Error')
//     }
// };