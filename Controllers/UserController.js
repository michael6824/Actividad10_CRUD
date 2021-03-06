const User = require('../Models/User');

function create(req, res) {
    var user = new User();
    var params = req.body;

    user.firstname = params.firstname;
    user.lastname = params.lastname;
    user.email = params.email;
    user.age = params.age;

    user.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "correcto",
                    dataUser: userCreated
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var idUser = req.params.iduser;

    User.findByIdAndUpdate(idUser, parameters, (error, userUpdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userUpdated) {
                res.status(400).send({
                    message: "Error al actualizar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "usuario actualizado",
                    dataUser: userUpdated
                })
            }
        }
    })
}

function remove(req, res) {
    var idUser = req.params.iduser;

    User.findByIdAndDelete(idUser, (error, userRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 400,
                message: "error al eliminar"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Usuario Eliminado"
            })
        }
    })
}

function getAllUsers(req, res) {
    User.find({}, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
}

function getbyname(req, res) {
    var name = req.params.name;
    User.find({ firstname: { $regex: name } }, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
}

function getbyemail(req, res) {
    var email = req.params.email;
    User.find({ email: email }, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
}

function getbyage(req, res) {
    var age = req.params.age;
    User.find({ age: age }, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el Servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
}
module.exports = {
    create,
    update,
    remove,
    getAllUsers,
    getbyname,
    getbyemail,
    getbyage
}