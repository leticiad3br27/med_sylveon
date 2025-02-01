// pages/api/medicos.js
import {
    buscarTodosMedicos,
    buscarMedicoPorId,
    buscarMedicoPorEspecialidade,
    adicionarMedico,
    atualizarMedico,
    excluirMedico,
  } from '../servico/servicoMedico';
  
  export default function handler(req, res) {
    const { id, especialidade } = req.query;
  
    switch (req.method) {
      case 'GET':
        if (id) {
          // Buscar médico por ID
          const medico = buscarMedicoPorId(Number(id));
          if (!medico) {
            return res.status(404).json({ message: 'Médico não encontrado' });
          }
          return res.status(200).json(medico);
        } else if (especialidade) {
          // Buscar médicos por especialidade
          const medicos = buscarMedicoPorEspecialidade(especialidade);
          return res.status(200).json(medicos);
        } else {
          // Buscar todos os médicos
          const medicos = buscarTodosMedicos();
          return res.status(200).json(medicos);
        }
  
      case 'POST':
        // Adicionar um novo médico
        const novoMedico = adicionarMedico(req.body);
        return res.status(201).json(novoMedico);
  
      case 'PUT':
        if (!id) {
          return res.status(400).json({ message: 'ID é obrigatório' });
        }
        // Atualizar médico por ID
        const medicoAtualizado = atualizarMedico(Number(id), req.body);
        if (!medicoAtualizado) {
          return res.status(404).json({ message: 'Médico não encontrado' });
        }
        return res.status(200).json(medicoAtualizado);
  
      case 'DELETE':
        if (!id) {
          return res.status(400).json({ message: 'ID é obrigatório' });
        }
        // Excluir médico por ID
        const sucesso = excluirMedico(Number(id));
        if (!sucesso) {
          return res.status(404).json({ message: 'Médico não encontrado' });
        }
        return res.status(204).end();
  
      default:
        res.status(405).json({ message: 'Método não permitido' });
    }
  }