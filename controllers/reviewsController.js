const DB = require('../database/models');
const moduloLogin = require('../modulo-login');

module.exports = {
    index: (req, res) => {
        DB.Reviews
        .findAll()
        .then(reviews => {
            res.send(reviews);
        })
        .catch(error => {
            res.send(error);
        })
    },
    create: (req, res) => {res.render('detail')},

    store: (req, res) => {
        moduloLogin.validar(req.body.email, req.body.password)
        .then (resultado => {
            if (resultado != null) {
            DB.Reviews
            .create(req.body)
            .then(SavedReview => {return res.redirect('back');}) //preguntar como mandar al fondo de la vista
            .catch(error => {res.send(error);
            })
        }else res.redirect('/usuarios/reviews');}) 

    },    
}