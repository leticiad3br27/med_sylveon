"use client";

// components/Footer/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Med_Sylveon. Todos os direitos reservados.</p>
      <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
      <p>Contato: contato@med_sylveon.com</p>
    </footer>
  );
};

export default Footer;