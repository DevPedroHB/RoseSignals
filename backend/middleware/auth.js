const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
    try{
        const decoded = jwt.verify(request.headers.authorization, 'p3dr0h8@d3v');
        request.usuario = decoded;
        next();
    } catch(error){
        return response.status(401).send({ error: `Sem autorização!` });
    }
}