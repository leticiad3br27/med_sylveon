"use client";

import { useEffect, useState } from 'react';
import { listarMedicos, buscarMedicoPorEspecialidade } from '@app/clinica-medica-api/servico/servicoConsultas';
import Link from 'next/link';
import styles from './MedicoPage.module.css';

export default function MedicoPage() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [especialidade, setEspecialidade] = useState('');

  const fetchMedicos = async (especialidade = '') => {
    try {
      const data = especialidade ? await buscarMedicoPorEspecialidade(especialidade) : await listarMedicos();
      console.log('Dados recebidos:', data);
      setMedicos(data);
    } catch (err) {
      console.error('Erro ao carregar médicos:', err);
      setError(err.message || 'Erro ao carregar médicos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicos();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (especialidade.trim() === '') {
      setError('Por favor, insira uma especialidade válida.');
      return;
    }
    setLoading(true);
    fetchMedicos(especialidade);
  };

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Lista de Médicos</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          placeholder="Buscar por especialidade"
        />
        <button type="submit">Buscar</button>
      </form>
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
                <td>{medico.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}