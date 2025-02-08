"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const Card = ({ title, children }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardContent}>{children}</p>
  </div>
);

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkScroll = () => {
    setShowScrollButton(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Bem-vindo à Med_Sylveon</h1>
        <p className={styles.subtitle}>Cuidamos da sua saúde com carinho e dedicação!</p>
      </header>

      <nav className={styles.nav}>
        <ul>
          <li><Link href="#servicos">Serviços</Link></li>
          <li><Link href="#contato">Contato</Link></li>
        </ul>
      </nav>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <section id="servicos" className={styles.services}>
        <h2>Nossos Serviços</h2>
        <div className={styles.cardContainer}>
          <Card title="Consultas Médicas">Atendimento especializado em diversas áreas para melhor cuidar da sua saúde.</Card>
          <Card title="Exames e Diagnósticos">Tecnologia avançada para exames laboratoriais e de imagem com precisão.</Card>
          <Card title="Cirurgias">Procedimentos cirúrgicos seguros com profissionais qualificados.</Card>
          <Card title="Acompanhamento Preventivo">Monitoramento contínuo para garantir seu bem-estar.</Card>
          <Card title="Pediatria">Cuidamos dos pequenos com todo o carinho e atenção.</Card>
          <Card title="Psicologia">Apoio emocional e terapias especializadas para sua saúde mental.</Card>
        </div>
      </section>

      

      {showScrollButton && (
        <button className={styles.scrollButton} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}
