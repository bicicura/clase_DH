const DB = require('../database/models');

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
        return res.send(req.body);
        DB.Reviews
            .create(req.body)
            .then(SavedReview => {return res.send('Felicitaciones hemos registrado exitosamente tu reseña'); })
            .catch(error => {res.send(error);
            })
    },    
}