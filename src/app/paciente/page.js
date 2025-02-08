"use client";
import { useState, useEffect } from "react";
import styles from "./tabela.module.css";

export default function PacientesList() {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState("");

  useEffect(() => {
    const url = nome ? `https://api-clinica-2a.onrender.com/pacientes?nome=${nome}` : "https://api-clinica-2a.onrender.com/pacientes";
    
    fetch(url)
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, [nome]);

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Lista de Pacientes</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar paciente pelo nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Nome</th>
            <th className={styles.th}>Telefone</th>
            <th className={styles.th}>E-mail</th>
            <th className={styles.th}>CPF</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.length > 0 ? (
            pacientes.map((paciente) => (
              <tr key={paciente.id} className={styles.tr}>
                <td className={styles.td}>{paciente.nome}</td>
                <td className={styles.td}>{paciente.telefone}</td>
                <td className={styles.td}>{paciente.email}</td>
                <td className={styles.td}>{paciente.cpf}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className={styles.td} style={{ textAlign: "center" }}>
                Nenhum paciente encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
