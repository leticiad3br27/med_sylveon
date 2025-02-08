"use client";
import { useState, useEffect } from "react";
import styles from "./tabela.module.css";

export default function MedicosList() {
  const [medicos, setMedicos] = useState([]);
  const [nome, setNome] = useState("");

  useEffect(() => {
    const url = nome ? `https://api-clinica-2a.onrender.com/medicos?nome=${nome}` : "https://api-clinica-2a.onrender.com/medicos";
    
    fetch(url)
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));
  }, [nome]);

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Lista de Médicos</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar médico pelo nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.searchInput}
        />
       
      </div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Nome</th>
            <th className={styles.th}>Especialidade</th>
            <th className={styles.th}>Telefone</th>
            <th className={styles.th}>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {medicos.length > 0 ? (
            medicos.map((medico) => (
              <tr key={medico.id} className={styles.tr}>
                <td className={styles.td}>{medico.nome}</td>
                <td className={styles.td}>{medico.especialidade}</td>
                <td className={styles.td}>{medico.telefone}</td>
                <td className={styles.td}>{medico.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className={styles.td} style={{ textAlign: "center" }}>
                Nenhum médico encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
