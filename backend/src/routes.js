const express = require('express');
const multer = require('multer');
const UserMulter = require('../middleware/UserMulter');
const UserController = require('./controllers/UserController');
const TopicController = require('./controllers/TopicController');
const ReactionController = require('./controllers/ReactionController');

const routes = express.Router();

// Rotas usuarios
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.post('/recover', UserController.recover);
routes.put('/user/:id_user', UserController.update);
routes.put('/user/image/:id_user', multer(UserMulter).array('file', 1), UserController.updateImg);
routes.get('/admin/users', UserController.list);
routes.delete('/admin/users/:id_user', UserController.delete);

// Rotas tópicos
routes.post('/topic/:user_id', TopicController.create);
routes.put('/topic/:id_topic', TopicController.update);
routes.get('/topic', TopicController.list);
routes.delete('/topic/:id_topic', TopicController.delete);

// Rotas reações
routes.post('/reaction/:topic_id/:user_id', ReactionController.create);
routes.put('/reaction/:id_reaction', ReactionController.update);
routes.delete('/reaction/:id_reaction', ReactionController.delete);

module.exports = routes;