const express = require('express');

const routes =  express.Router();
const OngController =  require('./controllers/OngController');
const IncidentsController =  require('./controllers/IncidenteController');
const SessionController =  require('./controllers/SessionController');
const ProfileController =  require('./controllers/ProfileController');
const connection = require('./database/conection');

routes.post('/sessions', SessionController.create);

routes.get('/ongs',OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('incidents/:id', IncidentsController.delete);

routes.

module.exports =  routes;