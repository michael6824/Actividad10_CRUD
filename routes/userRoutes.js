const express = require('express');
const UserController = require('../Controllers/UserController')
const api = express.Router();

api.get('/hi', (req, res) => {
    console.log('llegó a la ruta saludar...');
});
api.post('/', UserController.create);
api.put('/:iduser', UserController.update);
api.delete('/:iduser', UserController.remove);
api.get('/allUsers', UserController.getAllUsers)
module.exports = api;