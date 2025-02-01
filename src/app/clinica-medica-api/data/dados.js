export const medicos = [
    {
        id: 1,
        nome: "Dr. João Silva",
        especialidade: "Cardiologia",
        crm: "123456-SP",
        telefone: "(11) 98765-4321",
        email: "joao.silva@clinica.com",
        horarioAtendimento: "08:00 - 17:00"
    },
    {
        id: 2,
        nome: "Dra. Maria Oliveira",
        especialidade: "Pediatria",
        crm: "654321-SP",
        telefone: "(11) 91234-5678",
        email: "maria.oliveira@clinica.com",
        horarioAtendimento: "09:00 - 18:00"
    },
    {
        id: 3,
        nome: "Dr. Carlos Pereira",
        especialidade: "Ortopedia",
        crm: "789012-SP",
        telefone: "(11) 99876-5432",
        email: "carlos.pereira@clinica.com",
        horarioAtendimento: "10:00 - 19:00"
    }
];

export const pacientes = [
    {
        id: 1,
        nome: "Ana Souza",
        idade: 30,
        telefone: "(11) 91234-5678",
        email: "ana.souza@gmail.com",
        endereco: "Rua das Flores, 123, São Paulo, SP",
        convenio: "Particular"
    },
    {
        id: 2,
        nome: "Bruno Lima",
        idade: 45,
        telefone: "(11) 98765-4321",
        email: "bruno.lima@gmail.com",
        endereco: "Avenida Paulista, 456, São Paulo, SP",
        convenio: "Unimed"
    },
    {
        id: 3,
        nome: "Carla Mendes",
        idade: 28,
        telefone: "(11) 99876-5432",
        email: "carla.mendes@gmail.com",
        endereco: "Rua das Acácias, 789, São Paulo, SP",
        convenio: "Amil"
    }
];

export const consultas = [
    {
        id: 1,
        idMedico: 1,
        idPaciente: 1,
        data: "2023-10-01",
        horario: "09:00",
        descricao: "Consulta de rotina"
    },
    {
        id: 2,
        idMedico: 2,
        idPaciente: 2,
        data: "2023-10-02",
        horario: "10:00",
        descricao: "Consulta pediátrica"
    },
    {
        id: 3,
        idMedico: 3,
        idPaciente: 3,
        data: "2023-10-03",
        horario: "11:00",
        descricao: "Consulta ortopédica"
    }
];
