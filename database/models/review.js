module.exports = function (sequelize, DataTypes) {
    const review = sequelize.define(
        'Reviews',
    {
        serie_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        text_review: DataTypes.STRING,
        rate: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { 
        tableName: 'reviews',
        timestamps: true
    }
    );

    return review;
}