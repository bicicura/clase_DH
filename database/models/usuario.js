module.exports = function (sequelize, DataTypes) {
    const usuario = sequelize.define(
        'Usuarios',
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.INTEGER,
        birth_date: DataTypes.DATE
    },
    { 
        tableName: 'usuarios',
        timestamps: false
    }
    );

    usuario.associate = function (models) {
        usuario.hasMany(models.Reviews, {
            as: 'reviews',
            foreignKey: 'user_id'
        })
    }

    return usuario;
}