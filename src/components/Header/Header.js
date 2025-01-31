"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Ícone de menu (casinha) */}
        <button className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'} {/* Alterna entre ícone de menu e "X" */}
        </button>

        {/* Menu de navegação */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {/* Link para a homepage */}
            <li>
              <Link href="/" className={styles.link} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/medico" className={styles.link} onClick={toggleMenu}>
                Médicos
              </Link>
            </li>
            <li>
              <Link href="/paciente" className={styles.link} onClick={toggleMenu}>
                Pacientes
              </Link>
            </li>
            <li>
              <Link href="/consulta" className={styles.link} onClick={toggleMenu}>
                Consultas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;