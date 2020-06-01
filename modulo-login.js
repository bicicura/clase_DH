let DB = require('./database/models');
let bcrypt = require ('bcryptjs');

let moduloLogin = {
    chequearUsuario: function (email) {
        return DB.Usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return DB.Usuarios.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, password) {
        return DB.Usuarios.findOne({
            where:{
                email:email,
            },
        })
        .then(results=>{
            if (results != null) {
                let chequeo = bcrypt.compareSync(password, results.password)
                if (chequeo) {
                    return results;
                }else{
                    return undefined;
                }
            }else {return undefined
            }
        })
    }
}


module.exports = moduloLogin;