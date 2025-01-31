// app/consulta/page.js
"use client";

import { useEffect, useState } from 'react';
import { listarConsultas } from '../../api/consultaApi';

export default function ConsultaPage() {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const data = await listarConsultas();
        setConsultas(data);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Lista de Consultas</h1>
      <ul>
        {consultas.map(consulta => (
          <li key={consulta.id}>
            {consulta.data} - {consulta.medico} - {consulta.paciente}
          </li>
        ))}
      </ul>
    </div>
  );
}