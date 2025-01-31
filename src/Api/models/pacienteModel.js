module.exports = (sequelize, DataTypes) => {
    const Paciente = sequelize.define('Paciente', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'pacientes',
        timestamps: true,
    });

    return Paciente;
};