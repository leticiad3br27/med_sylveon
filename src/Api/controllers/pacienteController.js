class PacienteController {
    constructor(pacienteModel) {
        this.pacienteModel = pacienteModel;
    }

    async criarPaciente(req, res) {
        try {
            const novoPaciente = await this.pacienteModel.create(req.body);
            res.status(201).json(novoPaciente);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async listarPacientes(req, res) {
        try {
            const pacientes = await this.pacienteModel.find();
            res.status(200).json(pacientes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async atualizarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteAtualizado = await this.pacienteModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!pacienteAtualizado) {
                return res.status(404).json({ message: 'Paciente não encontrado' });
            }
            res.status(200).json(pacienteAtualizado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteDeletado = await this.pacienteModel.findByIdAndDelete(id);
            if (!pacienteDeletado) {
                return res.status(404).json({ message: 'Paciente não encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PacienteController;