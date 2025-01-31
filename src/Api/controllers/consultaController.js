const connectDB = require('../config/db');

class ConsultaController {
    async agendarConsulta(req, res) {
        const { pacienteId, medicoId, dataConsulta } = req.body;
        const connection = await connectDB();
        try {
            const [result] = await connection.execute(
                'INSERT INTO consultas (paciente_id, medico_id, data_consulta) VALUES (?, ?, ?)',
                [pacienteId, medicoId, dataConsulta]
            );
            res.status(201).json({ message: 'Consulta agendada com sucesso.', consultaId: result.insertId });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao agendar consulta.', error });
        } finally {
            connection.end();
        }
    }

    async listarConsultas(req, res) {
        const connection = await connectDB();
        try {
            const [rows] = await connection.execute('SELECT * FROM consultas');
            res.status(200).json(rows);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar consultas.', error });
        } finally {
            connection.end();
        }
    }

    async cancelarConsulta(req, res) {
        const { consultaId } = req.params;
        const connection = await connectDB();
        try {
            await connection.execute('DELETE FROM consultas WHERE id = ?', [consultaId]);
            res.status(200).json({ message: 'Consulta cancelada com sucesso.' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cancelar consulta.', error });
        } finally {
            connection.end();
        }
    }
}

module.exports = ConsultaController;