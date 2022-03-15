const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (request, response, next) => {
    try{
        const decoded = jwt.verify(request.headers.authorization, process.env.CRYPTOGRAPHY);
        request.usuario = decoded;
        next();
    } catch(error){
        return response.status(401).send({ error: `Sem autorização!` });
    }
}