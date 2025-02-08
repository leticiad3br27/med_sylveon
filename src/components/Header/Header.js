'use client';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.Icon} src="/Icon.png" alt="Icon" />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/medicoLista" className={styles.link}>Médico</Link>
            <ul className={styles.submenu}>
              <li className={styles.subitem}>
                <Link href="/medicoLista" className={styles.sublink}>Listar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/criar" className={styles.sublink}>Criar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/editar" className={styles.sublink}>Editar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/excluir" className={styles.sublink}>Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/paciente" className={styles.link}>Paciente</Link>
            <ul className={styles.submenu}>
              <li className={styles.subitem}>
                <Link href="/paciente" className={styles.sublink}>Listar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/paciente/criar" className={styles.sublink}>Criar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/paciente/editar" className={styles.sublink}>Editar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/paciente/excluir" className={styles.sublink}>Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/consultas" className={styles.link}>Consultas</Link>
            <ul className={styles.submenu}>
              <li className={styles.subitem}>
                <Link href="/consultas" className={styles.sublink}>Listar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/consultas/criar" className={styles.sublink}>Criar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/consultas/editar" className={styles.sublink}>Editar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/consultas/excluir" className={styles.sublink}>Excluir</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;