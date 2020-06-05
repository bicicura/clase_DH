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
            .create(
                {serie_id: req.body.serie_id,
                user_id: resultado.id,
                text_review: req.body.text_review,
                rate: req.body.rate
            }
            )
            .then(SavedReview => {return res.redirect('back');}) //preguntar como mandar al fondo de la vista
            .catch(error => {res.send(error);
            })
        }else res.redirect('back');}) 

    },    
}