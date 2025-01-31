"use client"; // Indica que este componente é do lado do cliente
import React, { useEffect, useState } from 'react';
import { listarMedicos } from '../Apipi';

const Medico = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const carregarMedicos = async () => {
      const dados = await listarMedicos();
      setMedicos(dados);
    };
    carregarMedicos();
  }, []);

  return (
    <div>
      <h1>Médicos</h1>
      <ul>
        {medicos.map((medico) => (
          <li key={medico.id}>{medico.nome} - {medico.especialidade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Medico;