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
                <Link href="/medico/agenda" className={styles.sublink}>Listar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/criar" className={styles.sublink}>Criar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/editar" className={styles.sublink}>editar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/Excluir" className={styles.sublink}>Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/paciente" className={styles.link}>Paciente</Link>
            <ul className={styles.submenu}>
            <li className={styles.subitem}>
                <Link href="/paciente/agenda" className={styles.sublink}>Listar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/paciente/criar" className={styles.sublink}>Criar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/paciente/editar" className={styles.sublink}>editar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/paciente/Excluir" className={styles.sublink}>Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/consultas" className={styles.link}>Consultas</Link>
            <ul className={styles.submenu}>
            <li className={styles.subitem}>
                <Link href="/Consulta/agenda" className={styles.sublink}>Listar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/Consultas/criar" className={styles.sublink}>Criar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/Consultas/editar" className={styles.sublink}>editar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/Consultas/Excluir" className={styles.sublink}>Excluir</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;