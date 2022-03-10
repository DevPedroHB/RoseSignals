const express = require('express');
const multer = require('multer');
const UserMulter = require('../middleware/UserMulter');
const UserController = require('./controllers/UserController');
const TopicController = require('./controllers/TopicController');

const routes = express.Router();

// Rotas usuarios
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.post('/recover', UserController.recover);
routes.put('/user/:id', UserController.update);
routes.put('/user/image/:id', multer(UserMulter).array('file', 1), UserController.updateImg);
routes.get('/admin/users', UserController.list);
routes.delete('/admin/users/:id', UserController.delete);

// Rotas tópicos
routes.post('/topic/:id', TopicController.create);
routes.put('/topic/:id', TopicController.update);
routes.get('/topic', TopicController.list);
routes.delete('/topic/:id', TopicController.delete);

module.exports = routes;