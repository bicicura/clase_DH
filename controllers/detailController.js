const DB = require('../database/models/');

module.exports = {
    index: (req, res) => {
            DB.Reviews.findAll({
                where: [
                    {serie_id: req.query.idDeSerie}],
                include: ["usuario"]
            })
            .then(resultado =>
                res.render('detail', {resultado: resultado}))
    }
};