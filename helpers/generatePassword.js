const bcrypt = require('bcrypt');

exports.GeneretePassword = (password)=>{
    const newPassword =  bcrypt.hash(password, 10)
    return  newPassword;
}


exports.ComparePassword = async (password, basePassword)=>{
    const comparePass = await bcrypt.compare(password,basePassword)
    return comparePass;
}
