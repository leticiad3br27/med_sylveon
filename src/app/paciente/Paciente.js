"use client"; // Indica que este componente é do lado do cliente
import React, { useEffect, useState } from 'react';
import { listarPacientes } from '../../Api';

const Paciente = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const carregarPacientes = async () => {
      const dados = await listarPacientes();
      setPacientes(dados);
    };
    carregarPacientes();
  }, []);

  return (
    <div>
      <h1>Pacientes</h1>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>{paciente.nome} - {paciente.cpf}</li>
        ))}
      </ul>
    </div>
  );
};

export default Paciente;