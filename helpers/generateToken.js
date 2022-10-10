const jwt = require('jsonwebtoken');


const GenerateToken = async (payload)=>{
    const token = await jwt.sign({payload}, process.env.SECRET, {expiresIn: '1h'})
    return token;
    
}

module.exports = GenerateToken;