"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Função para verificar a posição do scroll
  const checkScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rola suavemente
    });
  };

  // Adiciona um listener para o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Bem-vindo à Med_Sylveon</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/medico" className={styles.link}>Médicos</Link>
          </li>
          <li className={styles.li}>
            <Link href="/paciente" className={styles.link}>Pacientes</Link>
          </li>
          <li className={styles.li}>
            <Link href="/consulta" className={styles.link}>Consultas</Link>
          </li>
        </ul>
      </nav>

      {/* Botão de rolar para o topo */}
      {showScrollButton && (
        <button className={styles.scrollButton} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}