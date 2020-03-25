const express = require('express');

//Import Controller
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//CreateSession
routes.post('/sessions', SessionController.create);

//Group routes ONgs
routes.get('/ongs', OngController.index); //List all ongs
routes.post('/ongs', OngController.store); //Create ongs

//Group routes Incidents
routes.get('/incidents', IncidentsController.index); //List all Incidents
routes.post('/incidents', IncidentsController.store); //Create Incidents
routes.delete('/incidents/:id', IncidentsController.delete); //Delete Incidents


//Group routes ProfileController
routes.get('/profile', ProfileController.index); //List specific incidents ongs

module.exports = routes;