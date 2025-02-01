import { medicos } from '../data/dados.js';

// Buscar todos os médicos
const listarMedicos) => {
    return medicos;
};

// Buscar médico por ID
const buscarMedicoPorId = (id) => {
    return medicos.find(m => m.id === id);
};

// Buscar médicos por especialidade
const buscarMedicoPorEspecialidade = (especialidade) => {
    return medicos.filter(m => m.especialidade.toLowerCase() === especialidade.toLowerCase());
};

// Adicionar novo médico
const adicionarMedico = (medico) => {
    const novoMedico = { id: medicos.length + 1, ...medico };
    medicos.push(novoMedico);
    return novoMedico;
};

// Atualizar médico
const atualizarMedico = (id, dados) => {
    const medico = medicos.find(m => m.id === id);
    if (!medico) return null;
    Object.assign(medico, dados);
    return medico;
};

// Excluir médico
const excluirMedico = (id) => {
    const index = medicos.findIndex(m => m.id === id);
    if (index === -1) return null;
    medicos.splice(index, 1);
    return true;
};

export default {listarMedico, buscarMedicoPorId, buscarMedicoPorEspecialidade, adicionarMedico, atualizarMedico, excluirMedico };
