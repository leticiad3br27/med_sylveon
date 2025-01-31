
"use client";

import Link from 'next/link';
import './page.module.css';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Med_Sylveon</h1>
      <nav>
        <ul>
          <li>
            <Link href="/medico">Médicos</Link>
          </li>
          <li>
            <Link href="/paciente">Pacientes</Link>
          </li>
          <li>
            <Link href="/consulta">Consultas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Este arquivo define a página inicial da aplicação, incluindo links para as páginas de médicos, pacientes e consultas.
// O componente Link do Next.js é utilizado para permitir a navegação entre as páginas.