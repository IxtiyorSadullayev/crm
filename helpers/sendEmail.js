const nodemailer = require('nodemailer');


const sendMessageEmail = async(name, useremail, subject, text)=>{
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth:{
            user: "jonquin9999@gmail.com",
            pass: "teduvfpqpcufikse"
        }
    })
    
    const option = {
        from: `${name} jonquin9999@gmail.com`,
        to: `${useremail}`,
        subject: subject,
        text: text
    }
    
    transport.sendMail(option, (err, info) =>{
        if(err){
            return {
                error: true,
                message: err
            };
        }
        return {
            error: false,
            message: info.response
        }
    })
}

module.exports = sendMessageEmail;