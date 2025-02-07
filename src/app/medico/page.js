jsx
import React from 'react';

const MedicosTabela = () => {
    const medicos = [
        { id: 1, nome: 'Dr. João Silva', telefone: '(11) 1234-5678', email: 'joao.silva@email.com', especialidade: 'Cardiologia' },
        { id: 2, nome: 'Dra. Maria Oliveira', telefone: '(11) 9876-5432', email: 'maria.oliveira@email.com', especialidade: 'Pediatria' },
        { id: 3, nome: 'Dr. Pedro Santos', telefone: '(21) 2345-6789', email: 'pedro.santos@email.com', especialidade: 'Ortopedia' },
        // Adicione mais médicos conforme necessário
    ];

    return (
        <div>
            <h1>Tabela de Médicos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Especialidade</th>
                    </tr>
                </thead>
                <tbody>
                    {medicos.map((medico) => (
                        <tr key={medico.id}>
                            <td>{medico.id}</td>
                            <td>{medico.nome}</td>
                            <td>{medico.telefone}</td>
                            <td>{medico.email}</td>
                            <td>{medico.especialidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicosTabela;