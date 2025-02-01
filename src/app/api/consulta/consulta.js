import {
    buscarTodasConsultas,
    buscarConsultaPorId,
    buscarConsultasPorMedico,
    buscarConsultasPorPaciente,
    adicionarConsulta,
    atualizarConsulta,
    excluirConsulta,
  } from '../servico/servicoConsultas';
  
  export default function handler(req, res) {
    const { id, medicoId, pacienteId } = req.query;
  
    switch (req.method) {
      case 'GET':
        if (id) {
          // Buscar consulta por ID
          const consulta = buscarConsultaPorId(Number(id));
          if (!consulta) {
            return res.status(404).json({ message: 'Consulta não encontrada' });
          }
          return res.status(200).json(consulta);
        } else if (medicoId) {
          // Buscar consultas por médico
          const consultas = buscarConsultasPorMedico(Number(medicoId));
          return res.status(200).json(consultas);
        } else if (pacienteId) {
          // Buscar consultas por paciente
          const consultas = buscarConsultasPorPaciente(Number(pacienteId));
          return res.status(200).json(consultas);
        } else {
          // Buscar todas as consultas
          const consultas = buscarTodasConsultas();
          return res.status(200).json(consultas);
        }
  
      case 'POST':
        // Adicionar uma nova consulta
        const novaConsulta = adicionarConsulta(req.body);
        return res.status(201).json(novaConsulta);
  
      case 'PUT':
        if (!id) {
          return res.status(400).json({ message: 'ID é obrigatório' });
        }
        // Atualizar consulta por ID
        const consultaAtualizada = atualizarConsulta(Number(id), req.body);
        if (!consultaAtualizada) {
          return res.status(404).json({ message: 'Consulta não encontrada' });
        }
        return res.status(200).json(consultaAtualizada);
  
      case 'DELETE':
        if (!id) {
          return res.status(400).json({ message: 'ID é obrigatório' });
        }
        // Excluir consulta por ID
        const sucesso = excluirConsulta(Number(id));
        if (!sucesso) {
          return res.status(404).json({ message: 'Consulta não encontrada' });
        }
        return res.status(204).end();
  
      default:
        res.status(405).json({ message: 'Método não permitido' });
    }
  }