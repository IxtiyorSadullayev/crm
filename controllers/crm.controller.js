const GeneretePassword = require('../helpers/generatePassword');
const GenerateToken = require('../helpers/generateToken');
const sendMessageEmail = require('../helpers/sendEmail');

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
        if(!crm){
            return SendMessage(res, 404, 'CRM is not defined, Meybe your data is wrong')
        }
        const tekshir = await GeneretePassword.ComparePassword(password, crm.password);
        if(!tekshir){
          return SendMessage(res, 404, "CRM is not defined. Meybe your data is wrong." )
        }
        const token = await GenerateToken(crm);
        res.status(200).json(token)
    } catch (e) {
        SendMessage(res, 500, 'Internal Server Error')
    }
};

exports.forgotPassword = async(req,res,next)=>{
    try {
        const {email} = req.body;
        const user = await CRM.findOne({email:email});
        if(!user){
            return SendMessage(res,404, 'User Not Found')
        }
        let text = `http://localhost:5000/crm/forgotpass/${user._id}`;
        await sendMessageEmail(user.nameCenter, user.email, 'Update Password', text);

        SendMessage(res,200, 'We send to email your Update Page');

    } catch (e) {
        res.status(500).json('Have an Error')
    }
};

exports.updatePassword = async(req,res,next)=>{
    try {
        const {password} = req.body;
        const _id = req.params.id;
        const hashpass = await GeneretePassword.GeneretePassword(password);
        const updateuser = await CRM.findByIdAndUpdate(_id, {password: hashpass});
        SendMessage(res,200,updateuser);
    } catch (e) {
        SendMessage(res,500, 'Internal Server Error')
    }
};




// Routes for superAdmin

exports.getAllCRM = async(req,res,next)=>{
    try {
        const crms = await CRM.find();
        SendMessage(res,200,crms)
    } catch (e) {
        SendMessage(res,500, 'Internal Server Error')
    }
};

exports.removeCRM = async(req,res,next)=>{
    try {
        const _id = req.params.id;
        const user = await CRM.findByIdAndRemove(_id)
        if(!user){
            return SendMessage(res,404,'CRM is not defined')
        }
        SendMessage(res,200,"CRM is removed")
    } catch (e) {
        SendMessage(res,500, 'Internal Server Error')
    }
};


exports.updateCRM = async(req,res,next)=>{
    try {
        const _id = req.params.id;
        const user = await CRM.findByIdAndUpdate(_id, req.body)
        if(!user){
            return SendMessage(res,404,'CRM is not defined')
        }
        SendMessage(res,200,"CRM is updated")
    } catch (e) {
        SendMessage(res,500, 'Internal Server Error')
    }
};

// exports.addCrm = async(req,res,next)=>{
//     try {
//         res.status(200).json('OK')
//     } catch (e) {
//         res.status(500).json('Have an Error')
//     }
// };