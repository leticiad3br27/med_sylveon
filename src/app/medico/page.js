// app/medico/page.js
"use client";

import { useEffect, useState } from 'react';
import { listarMedicos } from '../../Api/medicoApi';
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
        setMedicos(data);
      } catch (err) {
        setError('Erro ao carregar médicos');
      } finally {
        setLoading(false);
      }
    };

    fetchMedicos();
  }, []);

  if (loading) return <p className={styles.p}>Carregando...</p>;
  if (error) return <p className={styles.p}>{error}</p>;

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Lista de Médicos</h1>
      <ul className={styles.ul}>
        {medicos.map(medico => (
          <li key={medico.id} className={styles.li}>
            <Link href={`/medico/${medico.id}`} className={styles.link}>{medico.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}