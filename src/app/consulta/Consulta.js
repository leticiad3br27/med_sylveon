"use client"; // Indica que este componente é do lado do cliente
import React, { useEffect, useState } from 'react';
import { listarConsultas } from '../../Api';

const Consulta = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const carregarConsultas = async () => {
      const dados = await listarConsultas();
      setConsultas(dados);
    };
    carregarConsultas();
  }, []);

  return (
    <div>
      <h1>Consultas</h1>
      <ul>
        {consultas.map((consulta) => (
          <li key={consulta.id}>
            {consulta.paciente} - {consulta.medico} - {consulta.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Consulta;