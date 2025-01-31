module.exports = (sequelize, DataTypes) => {
    const Consulta = sequelize.define('Consulta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        medicoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Medicos',
                key: 'id'
            }
        },
        pacienteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pacientes',
                key: 'id'
            }
        },
        dataHora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'agendada'
        }
    }, {
        tableName: 'consultas',
        timestamps: true
    });

    return Consulta;
};