const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (request, response, next) => {
    try{
        const decoded = jwt.verify(request.headers.authorization, process.env.CRYPTOGRAPHY);
        request.user = decoded;
        next();
    } catch(error){
        return response.send({ error: `Sem autorização!` });
    }
}