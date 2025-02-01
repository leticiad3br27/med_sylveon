import { pacientes } from '../data/dados.js';

// Buscar todos os pacientes
const buscarTodosPacientes = () => {
    return pacientes;
};

// Buscar paciente por ID
const buscarPacientePorId = (id) => {
    return pacientes.find(p => p.id === id);
};

// Buscar pacientes por tipo de convênio
const buscarPacientePorConvenio = (convenio) => {
    return pacientes.filter(p => p.convenio.toLowerCase() === convenio.toLowerCase());
};

// Adicionar novo paciente
const adicionarPaciente = (paciente) => {
    const novoPaciente = { id: pacientes.length + 1, ...paciente };
    pacientes.push(novoPaciente);
    return novoPaciente;
};

// Atualizar paciente
const atualizarPaciente = (id, dados) => {
    const paciente = pacientes.find(p => p.id === id);
    if (!paciente) return null;
    Object.assign(paciente, dados);
    return paciente;
};

// Excluir paciente
const excluirPaciente = (id) => {
    const index = pacientes.findIndex(p => p.id === id);
    if (index === -1) return null;
    pacientes.splice(index, 1);
    return true;
};

export { buscarTodosPacientes, buscarPacientePorId, buscarPacientePorConvenio, adicionarPaciente, atualizarPaciente, excluirPaciente };
