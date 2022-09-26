const jwt = require('jsonwebtoken');
const SendMessage = require('./sendMessageUser');
const CrmMiddleware = async (req,res,next) =>{
    try {
        const token = req.header.Authorization;
        
    } catch (e) {
        SendMessage(res, 500, 'Internal Server Error');
    }
}
