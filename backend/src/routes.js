const express = require('express');
const multer = require('multer');
const Auth = require('../middleware/Auth');
const UserMulter = require('../middleware/UserMulter');
const UserController = require('./controllers/UserController');
const TopicController = require('./controllers/TopicController');
const ReactionController = require('./controllers/ReactionController');
const SpreadsheetController = require('./controllers/SpreadsheetController');

const routes = express.Router();

// Rotas usuarios
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.post('/recover', UserController.recover);
routes.put('/user', Auth, UserController.update);
routes.put('/user/image', Auth, multer(UserMulter).array('file', 1), UserController.updateImg);
routes.get('/admin/users', Auth, UserController.list);
routes.get('/user/topics/:id_user', Auth, UserController.topics);
routes.get('/user/spreadsheets/:id_user', Auth, UserController.spreadsheets);
routes.delete('/admin/users/:id_user', Auth, UserController.delete);

// Rotas tópicos
routes.post('/topic', Auth, TopicController.create);
routes.put('/topic/:id_topic', Auth, TopicController.update);
routes.get('/topic', Auth, TopicController.list);
routes.get('/topic/:id_topic', Auth, TopicController.listSpecific);
routes.delete('/topic/:id_topic', Auth, TopicController.delete);

// Rotas reações
routes.post('/reaction/:topic_id', Auth, ReactionController.create);
routes.put('/reaction/:id_reaction', Auth, ReactionController.update);
routes.delete('/reaction/:id_reaction', Auth, ReactionController.delete);

// Rotas planilhas
routes.post('/spreadsheet', Auth, SpreadsheetController.create);
routes.put('/spreadsheet/:id_spreadsheet', Auth, SpreadsheetController.update);
routes.get('/spreadsheet', Auth, SpreadsheetController.list);
routes.get('/spreadsheet/:id_spreadsheet', Auth, SpreadsheetController.listSpecific);
routes.delete('/spreadsheet/:id_spreadsheet', Auth, SpreadsheetController.delete);

module.exports = routes;