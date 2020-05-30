const DB = require('../database/models/');
var OP = require('sequelize');

module.exports = {
    index: (req, res) => {
        DB.Usuarios
        .findAll()
        .then(usuarios => {
            res.send(usuarios);
        })
        .catch(error => {
            res.send(error);
        })
    },

    create: (req, res) => {res.render('registerForm')},

    store: (req, res) => {
        DB.Usuarios
            .create(req.body)
            .then(SavedUser => {return res.send('Felicitaciones ' + req.body.name + ' te has registrado exitosamente!'); })
            .catch(error => {res.send(error);
            })
    },

    search: (req, res) =>
    { DB.Usuarios 
    .findAll({
        where: {
            email: {[OP.like]:req.body.usuarios }}
    })
    .then(usuarios => {
        if (usuarios.length == 0)
        return res.send ("No se encontraron usuarios");
        else{res.render('searchUser', {usuarios: usuarios})}
    }

    ) 
    .catch(error => {
        return res.send(error);
    })
},

}