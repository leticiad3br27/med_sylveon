"use client";
import { useState, useEffect } from "react";
import styles from "./tabela.module.css";

export default function ConsultasList() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const url = "https://api-clinica-2a.onrender.com/consultas";
    
    fetch(url)
      .then(response => response.ok ? response.json() : [])
      .then(data => setConsultas(Array.isArray(data) ? data : [data]));
  }, []);

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Lista de Consultas</h1>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Nome da Consulta</th>
            <th className={styles.th}>Médico</th>
            <th className={styles.th}>Paciente</th>
            <th className={styles.th}>Tipo de Consulta</th>
          </tr>
        </thead>
        <tbody>
          {consultas.length > 0 ? (
            consultas.map((consulta) => (
              <tr key={consulta.id} className={styles.tr}>
                <td className={styles.td}>{consulta.nome}</td>
                <td className={styles.td}>{consulta.medico}</td>
                <td className={styles.td}>{consulta.paciente}</td>
                <td className={styles.td}>{consulta.tipo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className={styles.td} style={{ textAlign: "center" }}>
                Nenhuma consulta encontrada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
