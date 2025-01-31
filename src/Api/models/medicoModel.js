module.exports = (sequelize, DataTypes) => {
    const Medico = sequelize.define('Medico', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        especialidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        crm: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
            },
        },
    }, {
        tableName: 'medicos',
        timestamps: true,
    });

    return Medico;
};