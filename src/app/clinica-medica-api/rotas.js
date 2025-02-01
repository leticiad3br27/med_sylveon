import express from 'express';
import { medicos } from './data/dados.js';
import { pacientes } from './data/dados.js';
import { consultas } from './data/dados.js';

const app = express();

app.use(express.json());

const buscarTodosMedicos = () => {
    return medicos;
};

const buscarMedicoPorId = (id) => {
    return medicos.find(m => m.id === id);
};

const buscarMedicoPorEspecialidade = (especialidade) => {
    return medicos.filter(m => m.especialidade.toLowerCase() === especialidade.toLowerCase());
};

const adicionarMedico = (medico) => {
    const novoMedico = { id: medicos.length + 1, ...medico };
    medicos.push(novoMedico);
    return novoMedico;
};

const atualizarMedico = (id, dados) => {
    const medico = medicos.find(m => m.id === id);
    if (!medico) return null;
    Object.assign(medico, dados);
    return medico;
};

const excluirMedico = (id) => {
    const index = medicos.findIndex(m => m.id === id);
    if (index === -1) return null;
    medicos.splice(index, 1);
    return true;
};

const buscarTodosPacientes = () => {
    return pacientes;
};

const buscarPacientePorId = (id) => {
    return pacientes.find(p => p.id === id);
};

const buscarPacientePorConvenio = (convenio) => {
    return pacientes.filter(p => p.convenio.toLowerCase() === convenio.toLowerCase());
};

const adicionarPaciente = (paciente) => {
    const novoPaciente = { id: pacientes.length + 1, ...paciente };
    pacientes.push(novoPaciente);
    return novoPaciente;
};

const atualizarPaciente = (id, dados) => {
    const paciente = pacientes.find(p => p.id === id);
    if (!paciente) return null;
    Object.assign(paciente, dados);
    return paciente;
};

const excluirPaciente = (id) => {
    const index = pacientes.findIndex(p => p.id === id);
    if (index === -1) return null;
    pacientes.splice(index, 1);
    return true;
};

const buscarTodasConsultas = () => {
    return consultas;
};

const buscarConsultaPorId = (id) => {
    return consultas.find(c => c.id === id);
};

const adicionarConsulta = (consulta) => {
    const novaConsulta = { id: consultas.length + 1, ...consulta };
    consultas.push(novaConsulta);
    return novaConsulta;
};

const atualizarConsulta = (id, dados) => {
    const consulta = consultas.find(c => c.id === id);
    if (!consulta) return null;
    Object.assign(consulta, dados);
    return consulta;
};

const excluirConsulta = (id) => {
    const index = consultas.findIndex(c => c.id === id);
    if (index === -1) return null;
    consultas.splice(index, 1);
    return true;
};

app.get('/api/medico', (req, res) => {
    const medicosResult = buscarTodosMedicos();
    res.json(medicosResult);
});

app.get('/api/medico/:id', (req, res) => {
    const medico = buscarMedicoPorId(parseInt(req.params.id));
    if (!medico) {
        return res.status(404).json({ message: "Médico não encontrado" });
    }
    res.json(medico);
});

app.get('/api/medico/especialidade/:especialidade', (req, res) => {
    const medicosResult = buscarMedicoPorEspecialidade(req.params.especialidade);
    if (medicosResult.length === 0) {
        return res.status(404).json({ message: "Médicos não encontrados para essa especialidade" });
    }
    res.json(medicosResult);
});

app.post('/api/medico', (req, res) => {
    const novoMedico = adicionarMedico(req.body);
    res.status(201).json(novoMedico);
});

app.put('/api/medico/:id', (req, res) => {
    const medico = atualizarMedico(parseInt(req.params.id), req.body);
    if (!medico) {
        return res.status(404).json({ message: "Médico não encontrado" });
    }
    res.json(medico);
});

app.delete('/api/medico/:id', (req, res) => {
    const sucesso = excluirMedico(parseInt(req.params.id));
    if (!sucesso) {
        return res.status(404).json({ message: "Médico não encontrado" });
    }
    res.status(204).send();
});

app.get('/api/paciente', (req, res) => {
    const pacientesResult = buscarTodosPacientes();
    res.json(pacientesResult);
});

app.get('/api/paciente/:id', (req, res) => {
    const paciente = buscarPacientePorId(parseInt(req.params.id));
    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }
    res.json(paciente);
});

app.get('/api/paciente/convenio/:convenio', (req, res) => {
    const pacientesResult = buscarPacientePorConvenio(req.params.convenio);
    if (pacientesResult.length === 0) {
        return res.status(404).json({ message: "Paciente não encontrado para esse convênio" });
    }
    res.json(pacientesResult);
});

app.post('/api/paciente', (req, res) => {
    const novoPaciente = adicionarPaciente(req.body);
    res.status(201).json(novoPaciente);
});

app.put('/api/paciente/:id', (req, res) => {
    const paciente = atualizarPaciente(parseInt(req.params.id), req.body);
    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }
    res.json(paciente);
});

app.delete('/api/paciente/:id', (req, res) => {
    const sucesso = excluirPaciente(parseInt(req.params.id));
    if (!sucesso) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }
    res.status(204).send();
});

app.get('/api/consulta', (req, res) => {
    const consultasResult = buscarTodasConsultas();
    res.json(consultasResult);
});

app.get('/api/consulta/:id', (req, res) => {
    const consulta = buscarConsultaPorId(parseInt(req.params.id));
    if (!consulta) {
        return res.status(404).json({ message: "Consulta não encontrada" });
    }
    res.json(consulta);
});

app.post('/api/consulta', (req, res) => {
    const novaConsulta = adicionarConsulta(req.body);
    res.status(201).json(novaConsulta);
});

app.put('/api/consulta/:id', (req, res) => {
    const consulta = atualizarConsulta(parseInt(req.params.id), req.body);
    if (!consulta) {
        return res.status(404).json({ message: "Consulta não encontrada" });
    }
    res.json(consulta);
});

app.delete('/api/consulta/:id', (req, res) => {
    const sucesso = excluirConsulta(parseInt(req.params.id));
    if (!sucesso) {
        return res.status(404).json({ message: "Consulta não encontrada" });
    }
    res.status(204).send();
});

app.listen(3006, () => {
    console.log('Servidor rodando na porta 3006');
});
