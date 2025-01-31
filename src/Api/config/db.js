const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'UsuarioP',
    password: 'Mnb2711@',
    database: 'policlinica'
};

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return connection;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
};

module.exports = connectDB;