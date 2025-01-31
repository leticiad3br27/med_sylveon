class MedicoController {
    constructor(medicoModel) {
        this.medicoModel = medicoModel;
    }

    async criarMedico(req, res) {
        try {
            const medico = await this.medicoModel.create(req.body);
            res.status(201).json(medico);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async listarMedicos(req, res) {
        try {
            const medicos = await this.medicoModel.find();
            res.status(200).json(medicos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async atualizarMedico(req, res) {
        try {
            const { id } = req.params;
            const medico = await this.medicoModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!medico) {
                return res.status(404).json({ message: 'Médico não encontrado' });
            }
            res.status(200).json(medico);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deletarMedico(req, res) {
        try {
            const { id } = req.params;
            const medico = await this.medicoModel.findByIdAndDelete(id);
            if (!medico) {
                return res.status(404).json({ message: 'Médico não encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default MedicoController;