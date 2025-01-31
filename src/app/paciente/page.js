// app/paciente/page.js
"use client";

import { useEffect, useState } from 'react';
import { listarPacientes } from '../../api/pacienteApi';

export default function PacientePage() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const data = await listarPacientes();
        setPacientes(data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPacientes();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>{paciente.nome}</li>
        ))}
      </ul>
    </div>
  );
}

// Este arquivo define a página de listagem de pacientes. 
// Ele utiliza a função listarPacientes da API para buscar os dados e exibe os pacientes em uma lista. 
// O estado dos dados é gerenciado com useEffect e useState. 
// A página mostra um carregamento enquanto os dados estão sendo buscados.