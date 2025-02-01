

  import {
    buscarTodosPacientes,
    buscarPacientePorId,
    buscarPacientePorNome,
    adicionarPaciente,
    atualizarPaciente,
    excluirPaciente,
  } from '../servico/servicoPaciente';
  
  export default function handler(req, res) {
    const { id, nome } = req.query;
  
    switch (req.method) {
      case 'GET':
        if (id) {
          // Buscar paciente por ID
          const paciente = buscarPacientePorId(Number(id));
          if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
          }
          return res.status(200).json(paciente);
        } else if (nome) {
          // Buscar pacientes por nome
          const pacientes = buscarPacientePorNome(nome);
          return res.status(200).json(pacientes);
        } else {
          // Buscar todos os pacientes
          const pacientes = buscarTodosPacientes();
          return res.status(200).json(pacientes);
        }
  
      case 'POST':
        // Adicionar um novo paciente
        const novoPaciente = adicionarPaciente(req.body);
        return res.status(201).json(novoPaciente);
  
      case 'PUT':
        if (!id) {
          return res.status(400).json({ message: 'ID é obrigatório' });
        }
        // Atualizar paciente por ID
        const pacienteAtualizado = atualizarPaciente(Number(id), req.body);
        if (!pacienteAtualizado) {
          return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        return res.status(200).json(pacienteAtualizado);
  
      case 'DELETE':
        if (!id) {
          return res.status(400).json({ message: 'ID é obrigatório' });
        }
        // Excluir paciente por ID
        const sucesso = excluirPaciente(Number(id));
        if (!sucesso) {
          return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        return res.status(204).end();
  
      default:
        res.status(405).json({ message: 'Método não permitido' });
    }
  }