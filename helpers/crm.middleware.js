const jwt = require('jsonwebtoken');
const SendMessage = require('./sendMessageUser');
const CrmMiddleware = async (req,res,next) =>{
    try {
        const data = req.headers.authorization.split(' ');
        if(data[0] !== 'Bearer' || !data){
            return SendMessage(res, 401, 'Un autorization');
        }
        const token = data[1];
        jwt.verify(token, process.env.SECRET, (err, decode)=>{
            if(err){
                return SendMessage(res,401,"Not Autorization")
            }
            
            req.crm = decode.payload;
            next();
        })

    } catch (e) {
        SendMessage(res, 500, 'Internal Server Error');
    }
}
module.exports = CrmMiddleware;