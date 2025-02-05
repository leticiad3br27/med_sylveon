'use client'
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/medico" className={styles.link}>Médico</Link>
            <ul className={styles.submenu}>
              <li className={styles.subitem}>
                <Link href="/medico/agenda" className={styles.sublink}>Agenda</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/prontuarios" className={styles.sublink}>Prontuários</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/paciente" className={styles.link}>Paciente</Link>
            <ul className={styles.submenu}>
              <li className={styles.subitem}>
                <Link href="/paciente/agendamentos" className={styles.sublink}>Agendamentos</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/paciente/resultados" className={styles.sublink}>Resultados de Exames</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/consultas" className={styles.link}>Consultas</Link>
            <ul className={styles.submenu}>
              <li className={styles.subitem}>
                <Link href="/consultas/agendar" className={styles.sublink}>Agendar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/consultas/historico" className={styles.sublink}>Histórico</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;