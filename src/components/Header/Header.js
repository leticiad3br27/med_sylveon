"use client";

import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
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
    </header>
  );
};

export default Header;