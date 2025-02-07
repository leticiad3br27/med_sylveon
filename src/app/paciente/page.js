
"use client"
import React, { useState } from 'react';
import styles from './tabela.module.css'; 

const PacientesTabela = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('nome');

    const pacientes = [
        { id: 1, nome: 'João Silva', telefone: '(11) 1234-5678', email: 'joao.silva@email.com', condicao: 'Hipertensão' },
        { id: 2, nome: 'Maria Oliveira', telefone: '(11) 9876-5432', email: 'maria.oliveira@email.com', condicao: 'Asma' },
        { id: 3, nome: 'Pedro Santos', telefone: '(21) 2345-6789', email: 'pedro.santos@email.com', condicao: 'Fratura' },
        { id: 4, nome: 'Ana Costa', telefone: '(31) 3456-7890', email: 'ana.costa@email.com', condicao: 'Eczema' },
        { id: 5, nome: 'Carlos Almeida', telefone: '(41) 4567-8901', email: 'carlos.almeida@email.com', condicao: 'Epilepsia' },
        { id: 6, nome: 'Fernanda Lima', telefone: '(51) 5678-9012', email: 'fernanda.lima@email.com', condicao: 'Gravidez' },
        { id: 7, nome: 'Ricardo Mendes', telefone: '(61) 6789-0123', email: 'ricardo.mendes@email.com', condicao: 'Catarata' },
        { id: 8, nome: 'Juliana Rocha', telefone: '(71) 7890-1234', email: 'juliana.rocha@email.com', condicao: 'Diabetes' },
        { id: 9, nome: 'Felipe Pereira', telefone: '(81) 8901-2345', email: 'felipe.pereira@email.com', condicao: 'Cálculo Renal' },
        { id: 10, nome: 'Tatiane Souza', telefone: '(91) 9012-3456', email: 'tatiane.souza@email.com', condicao: 'Artrite' },
        { id: 11, nome: 'Lucas Almeida', telefone: '(11) 2345-6789', email: 'lucas.almeida@email.com', condicao: 'Hipertensão' },
        { id: 12, nome: 'Beatriz Lima', telefone: '(21) 3456-7890', email: 'beatriz.lima@email.com', condicao: 'Asma' },
        { id: 13, nome: 'André Costa', telefone: '(31) 4567-8901', email: 'andre.costa@email.com', condicao: 'Fratura' },
        { id: 14, nome: 'Camila Santos', telefone: '(41) 5678-9012', email: 'camila.santos@email.com', condicao: 'Eczema' },
        { id: 15, nome: 'Eduardo Ferreira', telefone: '(51) 6789-0123', email: 'eduardo.ferreira@email.com', condicao: 'Epilepsia' },
        { id: 16, nome: 'Larissa Martins', telefone: '(61) 7890-1234', email: 'larissa.martins@email.com', condicao: 'Gravidez' },
        { id: 17, nome: 'Tiago Rocha', telefone: '(71) 8901-2345', email: 'tiago.rocha@email.com', condicao: 'Catarata' },
        { id: 18, nome: 'Vanessa Pereira', telefone: '(81) 9012-3456', email: 'vanessa.pereira@email.com', condicao: 'Diabetes' },
        { id: 19, nome: 'Samuel Silva', telefone: '(91) 0123-4567', email: 'samuel.silva@email.com', condicao: 'Cálculo Renal' },
        { id: 20, nome: 'Juliane Almeida', telefone: '(11) 1234-5678', email: 'juliane.almeida@email.com', condicao: 'Artrite' },
        { id: 21, nome: 'Jorge Nascimento', telefone: '(21) 2345-6789', email: 'jorge.nascimento@email.com', condicao: 'Hipertensão' },
        { id: 22, nome: 'Renata Souza', telefone: '(31) 3456-7890', email: 'renata.souza@email.com', condicao: 'Asma' },
        { id: 23, nome: 'Felipe Lima', telefone: '(41) 4567-8901', email: 'felipe.lima@email.com', condicao: 'Fratura' },
        { id: 24, nome: 'Priscila Costa', telefone: '(51) 5678-9012', email: 'priscila.costa@email.com', condicao: 'Eczema' },
        { id: 25, nome: 'Bruno Mendes', telefone: '(61) 6789-0123', email: 'bruno.mendes@email.com', condicao: 'Epilepsia' },
        { id: 26, nome: 'Aline Rocha', telefone: '(71) 7890-1234', email: 'aline.rocha@email.com', condicao: 'Gravidez' },
        { id: 27, nome: 'Rafael Pereira', telefone: '(81) 8901-2345', email: 'rafael.pereira@email.com', condicao: 'Catarata' },
        { id: 28, nome: 'Mariana Almeida', telefone: '(91) 9012-3456', email: 'mariana.almeida@email.com', condicao: 'Diabetes' },
        { id: 29, nome: 'Henrique Silva', telefone: '(11) 2345-6789', email: 'henrique.silva@email.com', condicao: 'Cálculo Renal' },
        { id: 30, nome: 'Sofia Lima', telefone: '(21) 3456-7890', email: 'sofia.lima@email.com', condicao: 'Artrite' },
        { id: 31, nome: 'Gustavo Santos', telefone: '(31) 4567-8901', email: 'gustavo.santos@email.com', condicao: 'Hipertensão' },
        { id: 32, nome: 'Isabela Ferreira', telefone: '(41) 5678-9012', email: 'isabela.ferreira@email.com', condicao: 'Asma' },
        { id: 33, nome: 'Daniel Costa', telefone: '(51) 6789-0123', email: 'daniel.costa@email.com', condicao: 'Fratura' },
        { id: 34, nome: 'Gabriela Rocha', telefone: '(61) 7890-1234', email: 'gabriela.rocha@email.com', condicao: 'Eczema' },
        { id: 35, nome: 'Leonardo Mendes', telefone: '(71) 8901-2345', email: 'leonardo.mendes@email.com', condicao: 'Epilepsia' },
        { id: 36, nome: 'Camila Almeida', telefone: '(81) 9012-3456', email: 'camila.almeida@email.com', condicao: 'Gravidez' },
        { id: 37, nome: 'Fábio Pereira', telefone: '(91) 0123-4567', email: 'fabio.pereira@email.com', condicao: 'Catarata' },
        { id: 38, nome: 'Juliana Ferreira', telefone: '(11) 1234-5678', email: 'juliana.ferreira@email.com', condicao: 'Diabetes' },
        { id: 39, nome: 'Matheus Nascimento', telefone: '(21) 2345-6789', email: 'matheus.nascimento@email.com', condicao: 'Cálculo Renal' },
        { id: 40, nome: 'Letícia Silva', telefone: '(31) 3456-7890', email: 'leticia.silva@email.com', condicao: 'Artrite' },
        { id: 41, nome: 'Igor Almeida', telefone: '(41) 4567-8901', email: 'igor.almeida@email.com', condicao: 'Hipertensão' },
        { id: 42, nome: 'Tamires Lima', telefone: '(51) 5678-9012', email: 'tamires.lima@email.com', condicao: 'Asma' },
        { id: 43, nome: 'Jorge Santos', telefone: '(61) 6789-0123', email: 'jorge.santos@email.com', condicao: 'Fratura' },
        { id: 44, nome: 'Natália Costa', telefone: '(71) 7890-1234', email: 'natalia.costa@email.com', condicao: 'Eczema' },
        { id: 45, nome: 'Vinícius Ferreira', telefone: '(81) 8901-2345', email: 'vinicius.ferreira@email.com', condicao: 'Epilepsia' },
        { id: 46, nome: 'Larissa Rocha', telefone: '(91) 9012-3456', email: 'larissa.rocha@email.com', condicao: 'Gravidez' },
        { id: 47, nome: 'Rafael Silva', telefone: '(11) 2345-6789', email: 'rafael.silva@email.com', condicao: 'Catarata' },
        { id: 48, nome: 'Michele Almeida', telefone: '(21) 3456-7890', email: 'michele.almeida@email.com', condicao: 'Diabetes' },
        { id: 49, nome: 'Felipe Costa', telefone: '(31) 4567-8901', email: 'felipe.costa@email.com', condicao: 'Cálculo Renal' },
        { id: 50, nome: 'Ana Paula Ferreira', telefone: '(41) 5678-9012', email: 'anapaula.ferreira@email.com', condicao: 'Artrite' },
    ];


    

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const filteredPacientes = pacientes.filter((paciente) => {
        if (searchType === 'id') {
            return paciente.id.toString().includes(searchValue);
        } else if (searchType === 'nome') {
            return paciente.nome.toLowerCase().includes(searchValue.toLowerCase());
        } else if (searchType === 'condicao') {
            return paciente.condicao.toLowerCase().includes(searchValue.toLowerCase());
        }
        return true;
    });

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Tabela de Pacientes</h1>
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
                    <option value="condicao">Condição</option>
                </select>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Telefone</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Condição</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPacientes.map((paciente) => (
                        <tr className={styles.tr} key={paciente.id}>
                            <td className={styles.td}>{paciente.id}</td>
                            <td className={styles.td}>{paciente.nome}</td>
                            <td className={styles.td}>{paciente.telefone}</td>
                            <td className={styles.td}>{paciente.email}</td>
                            <td className={styles.td}>{paciente.condicao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PacientesTabela;