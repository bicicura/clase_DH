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

    logUser: function (req, res) {
    res.render ('login', {tipo: "log"});
},
    confirmUser: function (req,res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado => {
            if (resultado == undefined) {
                res.redirect('/users/reviews');
            } else{
                res.redirect('/users/reviews/' + resultado.id)
            }
        })
    },

    getReviews: function (req,res) {
        DB.Review.findAll({
            where: [
                {user_id: req.params.id}],
            include: ["usuario"]
        })
        .then(resultado =>
            res.render('reviews', {resultado: resultado}))
    },

    showEdit: function (req, res) {
        DB.Review.findOne({
            where: [
                {id: req.params.id}
            ]
        })
        .then(resultado => {
            res.render('editReview', {resultado: resultado})
        })
    },

    confirmEdit: function (req, res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado => {
            if (resultado != undefined) {
        DB.Review.update({
          review: req.body.review,
          rating: req.body.rating
        }, {
            where: {
                id: req.params.id,
            }
        })
        .then(() => {
            res.redirect('/users/reviews/' + resultado.id);
        })  
        } else {
            return res.redirect('users/reviews/edit' + req.params.id);
        }
        });
    },

    deleteReview: function (req, res) {
        res.render('login', {tipo: "delete", deleteId: req.params.id})
    },

    confirmDelete: function (req,res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then (resultado => {
            if (resultado != null) {
                DB.Review.destroy ({
                    where: {
                        id: req.params.id,
                    }
                })
                res.redirect('/users/reviews');
            }else{
                res.redirect('users/reviews/delete' + req.params.id);
            }
        })
    },
}