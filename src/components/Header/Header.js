"use client"; 
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.clinicName}>Med_Sylveon</h1>
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <NavLink to="/medico">Médico</NavLink>
          <ul>
            <li><NavLink to="/medico/listar">Listar Registros</NavLink></li>
            <li><NavLink to="/medico/buscar">Buscar</NavLink></li>
            <li><NavLink to="/medico/novo">Adicionar Novo</NavLink></li>
            <li><NavLink to="/medico/editar">Editar</NavLink></li>
            <li><NavLink to="/medico/excluir">Excluir</NavLink></li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/paciente">Paciente</NavLink>
          <ul>
            <li><NavLink to="/paciente/listar">Listar Registros</NavLink></li>
            <li><NavLink to="/paciente/buscar">Buscar</NavLink></li>
            <li><NavLink to="/paciente/novo">Adicionar Novo</NavLink></li>
            <li><NavLink to="/paciente/editar">Editar</NavLink></li>
            <li><NavLink to="/paciente/excluir">Excluir</NavLink></li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/consulta">Consulta</NavLink>
          <ul>
            <li><NavLink to="/consulta/listar">Listar Consultas</NavLink></li>
            <li><NavLink to="/consulta/agendar">Agendar Consulta</NavLink></li>
            <li><NavLink to="/consulta/reagendar">Reagendar Consulta</NavLink></li>
            <li><NavLink to="/consulta/cancelar">Cancelar Agendamento</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;