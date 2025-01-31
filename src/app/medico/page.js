// app/medico/page.js
"use client";

import { useEffect, useState } from 'react';
import { listarMedicos } from '../../api/medicoApi';
import Link from 'next/link';

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

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Médicos</h1>
      <ul>
        {medicos.map(medico => (
          <li key={medico.id}>
            <Link href={`/medico/${medico.id}`}>{medico.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}