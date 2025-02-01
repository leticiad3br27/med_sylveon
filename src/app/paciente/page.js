// app/paciente/page.js
"use client";

import { useEffect, useState } from 'react';
import { listarPacientes } from '../Api/pacienteApi';
import styles from './page.module.css';

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
    return <div className={styles.div}>Carregando...</div>;
  }

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Lista de Pacientes</h1>
      <ul className={styles.ul}>
        {pacientes.map((paciente) => (
          <li key={paciente.id} className={styles.li}>{paciente.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Este arquivo define a página de listagem de pacientes. 
// Ele utiliza a função listarPacientes da Api para buscar os dados e exibe os pacientes em uma lista. 
// O estado dos dados é gerenciado com useEffect e useState. 
// A página mostra um carregamento enquanto os dados estão sendo buscados.