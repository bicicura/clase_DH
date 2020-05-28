const DB = require('../database/models/');

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
        order: [
            ['name','ASC']
        ]
    })
    .then(usuarios => {
        return res.render ('searchUser', {listaUsuarios: usuarios
        });
    })
    .catch(error => {
        return res.send(error);
    })
},

}