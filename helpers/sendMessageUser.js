const SendMessage = (res, statusCode, Message) =>{
    return res.status(statusCode).json(Message);
}
module.exports = SendMessage;