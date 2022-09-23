const AsyncError = require('../helpers/asyncError');
const CRM = require('./../models/crm');


exports.addCrm = async(req,res,next)=>{
    try {
        res.status(200).json('OK')
    } catch (e) {
        res.status(500).json('Have an Error')
    }
};