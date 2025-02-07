
"use client"
import React, { useState } from 'react';
import styles from './tabela.module.css'; 

const MedicosTabela = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('nome');

    const medicos = [
        { id: 1, nome: 'Dr. João Silva', telefone: '(11) 1234-5678', email: 'joao.silva@email.com', especialidade: 'Cardiologia' },
        { id: 2, nome: 'Dra. Maria Oliveira', telefone: '(11) 9876-5432', email: 'maria.oliveira@email.com', especialidade: 'Pediatria' },
        { id: 3, nome: 'Dr. Pedro Santos', telefone: '(21) 2345-6789', email: 'pedro.santos@email.com', especialidade: 'Ortopedia' },
        { id: 4, nome: 'Dra. Ana Costa', telefone: '(31) 3456-7890', email: 'ana.costa@email.com', especialidade: 'Dermatologia' },
        { id: 5, nome: 'Dr. Carlos Almeida', telefone: '(41) 4567-8901', email: 'carlos.almeida@email.com', especialidade: 'Neurologia' },
        { id: 6, nome: 'Dra. Fernanda Lima', telefone: '(51) 5678-9012', email: 'fernanda.lima@email.com', especialidade: 'Ginecologia' },
        { id: 7, nome: 'Dr. Ricardo Mendes', telefone: '(61) 6789-0123', email: 'ricardo.mendes@email.com', especialidade: 'Oftalmologia' },
        { id: 8, nome: 'Dra. Juliana Rocha', telefone: '(71) 7890-1234', email: 'juliana.rocha@email.com', especialidade: 'Endocrinologia' },
        { id: 9, nome: 'Dr. Felipe Pereira', telefone: '(81) 8901-2345', email: 'felipe.pereira@email.com', especialidade: 'Urologia' },
        { id: 10, nome: 'Dra. Tatiane Souza', telefone: '(91) 9012-3456', email: 'tatiane.souza@email.com', especialidade: 'Geriatria' },
        { id: 11, nome: 'Dr. Lucas Almeida', telefone: '(11) 2345-6789', email: 'lucas.almeida@email.com', especialidade: 'Cardiologia' },
        { id: 12, nome: 'Dra. Beatriz Lima', telefone: '(21) 3456-7890', email: 'beatriz.lima@email.com', especialidade: 'Pediatria' },
        { id: 13, nome: 'Dr. André Costa', telefone: '(31) 4567-8901', email: 'andre.costa@email.com', especialidade: 'Ortopedia' },
        { id: 14, nome: 'Dra. Camila Santos', telefone: '(41) 5678-9012', email: 'camila.santos@email.com', especialidade: 'Dermatologia' },
        { id: 15, nome: 'Dr. Eduardo Ferreira', telefone: '(51) 6789-0123', email: 'eduardo.ferreira@email.com', especialidade: 'Neurologia' },
        { id: 16, nome: 'Dra. Larissa Martins', telefone: '(61) 7890-1234', email: 'larissa.martins@email.com', especialidade: 'Ginecologia' },
        { id: 17, nome: 'Dr. Tiago Rocha', telefone: '(71) 8901-2345', email: 'tiago.rocha@email.com', especialidade: 'Oftalmologia' },
        { id: 18, nome: 'Dra. Vanessa Pereira', telefone: '(81) 9012-3456', email: 'vanessa.pereira@email.com', especialidade: 'Endocrinologia' },
        { id: 19, nome: 'Dr. Samuel Silva', telefone: '(91) 0123-4567', email: 'samuel.silva@email.com', especialidade: 'Urologia' },
        { id: 20, nome: 'Dra. Juliane Almeida', telefone: '(11) 1234-5678', email: 'juliane.almeida@email.com', especialidade: 'Geriatria' },
        { id: 21, nome: 'Dr. Jorge Nascimento', telefone: '(21) 2345-6789', email: 'jorge.nascimento@email.com', especialidade: 'Cardiologia' },
        { id: 22, nome: 'Dra. Renata Souza', telefone: '(31) 3456-7890', email: 'renata.souza@email.com', especialidade: 'Pediatria' },
        { id: 23, nome: 'Dr. Felipe Lima', telefone: '(41) 4567-8901', email: 'felipe.lima@email.com', especialidade: 'Ortopedia' },
        { id: 24, nome: 'Dra. Priscila Costa', telefone: '(51) 5678-9012', email: 'priscila.costa@email.com', especialidade: 'Dermatologia' },
        { id: 25, nome: 'Dr. Bruno Mendes', telefone: '(61) 6789-0123', email: 'bruno.mendes@email.com', especialidade: 'Neurologia' },
        { id: 26, nome: 'Dra. Aline Rocha', telefone: '(71) 7890-1234', email: 'aline.rocha@email.com', especialidade: 'Ginecologia' },
        { id: 27, nome: 'Dr. Rafael Pereira', telefone: '(81) 8901-2345', email: 'rafael.pereira@email.com', especialidade: 'Oftalmologia' },
        { id: 28, nome: 'Dra. Mariana Almeida', telefone: '(91) 9012-3456', email: 'mariana.almeida@email.com', especialidade: 'Endocrinologia' },
        { id: 29, nome: 'Dr. Henrique Silva', telefone: '(11) 2345-6789', email: 'henrique.silva@email.com', especialidade: 'Urologia' },
        { id: 30, nome: 'Dra. Sofia Lima', telefone: '(21) 3456-7890', email: 'sofia.lima@email.com', especialidade: 'Geriatria' },
        { id: 31, nome: 'Dr. Gustavo Santos', telefone: '(31) 4567-8901', email: 'gustavo.santos@email.com', especialidade: 'Cardiologia' },
        { id: 32, nome: 'Dra. Isabela Ferreira', telefone: '(41) 5678-9012', email: 'isabela.ferreira@email.com', especialidade: 'Pediatria' },
        { id: 33, nome: 'Dr. Daniel Costa', telefone: '(51) 6789-0123', email: 'daniel.costa@email.com', especialidade: 'Ortopedia' },
        { id: 34, nome: 'Dra. Gabriela Rocha', telefone: '(61) 7890-1234', email: 'gabriela.rocha@email.com', especialidade: 'Dermatologia' },
        { id: 35, nome: 'Dr. Leonardo Mendes', telefone: '(71) 8901-2345', email: 'leonardo.mendes@email.com', especialidade: 'Neurologia' },
        { id: 36, nome: 'Dra. Camila Almeida', telefone: '(81) 9012-3456', email: 'camila.almeida@email.com', especialidade: 'Ginecologia' },
        { id: 37, nome: 'Dr. Fábio Pereira', telefone: '(91) 0123-4567', email: 'fabio.pereira@email.com', especialidade: 'Oftalmologia' },
        { id: 38, nome: 'Dra. Juliana Ferreira', telefone: '(11) 1234-5678', email: 'juliana.ferreira@email.com', especialidade: 'Endocrinologia' },
        { id: 39, nome: 'Dr. Matheus Nascimento', telefone: '(21) 2345-6789', email: 'matheus.nascimento@email.com', especialidade: 'Urologia' },
        { id: 40, nome: 'Dra. Letícia Silva', telefone: '(31) 3456-7890', email: 'leticia.silva@email.com', especialidade: 'Geriatria' },
        { id: 41, nome: 'Dr. Igor Almeida', telefone: '(41) 4567-8901', email: 'igor.almeida@email.com', especialidade: 'Cardiologia' },
        { id: 42, nome: 'Dra. Tamires Lima', telefone: '(51) 5678-9012', email: 'tamires.lima@email.com', especialidade: 'Pediatria' },
        { id: 43, nome: 'Dr. Jorge Santos', telefone: '(61) 6789-0123', email: 'jorge.santos@email.com', especialidade: 'Ortopedia' },
        { id: 44, nome: 'Dra. Natália Costa', telefone: '(71) 7890-1234', email: 'natalia.costa@email.com', especialidade: 'Dermatologia' },
        { id: 45, nome: 'Dr. Vinícius Ferreira', telefone: '(81) 8901-2345', email: 'vinicius.ferreira@email.com', especialidade: 'Neurologia' },
        { id: 46, nome: 'Dra. Larissa Rocha', telefone: '(91) 9012-3456', email: 'larissa.rocha@email.com', especialidade: 'Ginecologia' },
        { id: 47, nome: 'Dr. Rafael Silva', telefone: '(11) 2345-6789', email: 'rafael.silva@email.com', especialidade: 'Oftalmologia' },
        { id: 48, nome: 'Dra. Michele Almeida', telefone: '(21) 3456-7890', email: 'michele.almeida@email.com', especialidade: 'Endocrinologia' },
        { id: 49, nome: 'Dr. Felipe Costa', telefone: '(31) 4567-8901', email: 'felipe.costa@email.com', especialidade: 'Urologia' },
        { id: 50, nome: 'Dra. Ana Paula Ferreira', telefone: '(41) 5678-9012', email: 'anapaula.ferreira@email.com', especialidade: 'Geriatria' },
    ];

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const filteredMedicos = medicos.filter((medico) => {
        if (searchType === 'id') {
            return medico.id.toString().includes(searchValue);
        } else if (searchType === 'nome') {
            return medico.nome.toLowerCase().includes(searchValue.toLowerCase());
        } else if (searchType === 'especialidade') {
            return medico.especialidade.toLowerCase().includes(searchValue.toLowerCase());
        }
        return true;
    });

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Tabela de Médicos</h1>
            
            <div className={styles.searchContainer}>
    <input
        type="text"
        className={styles.searchInput} 
        placeholder="Buscar..."
        value={searchValue}
        onChange={handleSearchChange}
    />
    <select className={styles.searchSelect} 
        value={searchType}
        onChange={handleSearchTypeChange}
    >
        <option value="id">ID</option>
        <option value="nome">Nome</option>
        <option value="especialidade">Especialidade</option>
    </select>
</div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Telefone</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Especialidade</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMedicos.map((medico) => (
                        <tr className={styles.tr} key={medico.id}>
                            <td className={styles.td}>{medico.id}</td>
                            <td className={styles.td}>{medico.nome}</td>
                            <td className={styles.td}>{medico.telefone}</td>
                            <td className={styles.td}>{medico.email}</td>
                            <td className={styles.td}>{medico.especialidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicosTabela;