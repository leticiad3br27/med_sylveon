// app/medico/page.js
"use client";

import { useEffect, useState } from 'react';
import { listarMedicos } from '@/app/Api/medicoApi'; // Corrigir o caminho da importação
import Link from 'next/link';
import styles from './MedicoPage.module.css';

export default function MedicoPage() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const data = await listarMedicos();
        console.log('Dados recebidos:', data); // Adicionado console.log para verificar os dados recebidos
        setMedicos(data);
      } catch (err) {
        console.error('Erro ao carregar médicos:', err); // Adicionado console.log para verificar o erro
        setError('Erro ao carregar médicos');
      } finally {
        setLoading(false);
      }
    };

    fetchMedicos();
  }, []);

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Lista de Médicos</h1>
      {loading && <p className={styles.loading}>Carregando...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Especialidade</th>
              <th>Contato</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map(medico => (
              <tr key={medico.id}>
                <td>
                  <Link href={`/medico/${medico.id}`} className={styles.link}>{medico.nome}</Link>
                </td>
                <td>{medico.especialidade}</td>
                <td>{medico.contato}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}