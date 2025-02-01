import { consultas } from '../data/dados.js';

// Buscar todas as consultas
const buscarTodasConsultas = () => {
    return consultas;
};

// Buscar consulta por ID
const buscarConsultaPorId = (id) => {
    return consultas.find(c => c.id === id);
};

// Adicionar nova consulta
const adicionarConsulta = (consulta) => {
    const novaConsulta = { id: consultas.length + 1, ...consulta };
    consultas.push(novaConsulta);
    return novaConsulta;
};

// Atualizar consulta
const atualizarConsulta = (id, dados) => {
    const consulta = consultas.find(c => c.id === id);
    if (!consulta) return null;
    Object.assign(consulta, dados);
    return consulta;
};

// Excluir consulta
const excluirConsulta = (id) => {
    const index = consultas.findIndex(c => c.id === id);
    if (index === -1) return null;
    consultas.splice(index, 1);
    return true;
};

export { buscarTodasConsultas, buscarConsultaPorId, adicionarConsulta, atualizarConsulta, excluirConsulta };
