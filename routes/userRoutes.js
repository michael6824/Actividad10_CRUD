const express = require('express');
const UserController = require('../Controllers/UserController')
const api = express.Router();

api.get('/hi', (req, res) => {
    console.log('llegó a la ruta saludar...');
});
api.post('/', UserController.create);
api.put('/:iduser', UserController.update);
api.delete('/:iduser', UserController.remove);
api.get('/allUsers', UserController.getAllUsers);
api.get('/UsersbyName/:name', UserController.getbyname);
api.get('/UsersbyEmail/:email', UserController.getbyemail);
api.get('/Usersbyage/:age', UserController.getbyage);

module.exports = api;