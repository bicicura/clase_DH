const DB = require('../database/models/');
const op = DB.Sequelize.Op;
const moduloLogin = require('../modulo-login');
const bcrypt = require('bcryptjs');

module.exports = {
    index: (req, res) => {
        return res.render('searchUser')
    },

    create: (req, res) => {res.render('registerForm')},

    store: (req, res) => {
        req.body.password = bcrypt.hashSync(req.body.password,10)
        DB.Usuarios
            .create(req.body)
            .then(SavedUser => {return res.send('Felicitaciones ' + req.body.name + ' te has registrado exitosamente!'); })
            .catch(error => {res.send(error);
            })
    },

    search: (req, res) => {
        DB.Usuarios.findAll({
            where: {
                [op.or]: {
                    email: {[op.like]: "%" + req.query.searchUser + "%"},
                    name: {[op.like]: "%" + req.query.searchUser + "%"}
                }
            }
        })
        .then(resultado => {
            res.render('resultadoSearchUser', {
                usuarios: resultado
            })
        })
        .catch(error => {
            return res.send(error)
        })

},

    logUser: function (req, res) {
    res.render ('login', {tipo: "log"});
},

    confirmUser: function (req,res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado => {
            if (resultado == undefined) {
                res.redirect('/usuarios/reviews');
            } else{
                res.redirect('/usuarios/reviews/' + resultado.id)
            }
        })
    },

    getReviews: function (req,res) {
        DB.Reviews.findAll({
            where: [
                {user_id: req.params.id}],
            include: ["usuario"]
        })
        .then(resultado =>
            res.render('reviews', {resultado: resultado}))
    },

    showEdit: function (req, res) {
        DB.Reviews.findOne({
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
        DB.Reviews.update({
          review: req.body.review,
          rating: req.body.rating
        }, {
            where: {
                id: req.params.id,
            }
        })
        .then(() => {
            res.redirect('/usuarios/reviews/' + resultado.id);
        })  
        } else {
            return res.redirect('usuarios/reviews/edit' + req.params.id);
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
                DB.Reviews.destroy ({
                    where: {
                        id: req.params.id,
                    }
                })
                res.redirect('/usuarios/reviews');
            }else{
                res.redirect('usuarios/reviews/delete' + req.params.id);
            }
        })
    },
}