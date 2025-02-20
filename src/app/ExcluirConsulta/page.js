"use client";
import { useState, useEffect } from "react";
import styles from "./Excluir.module.css";

export default function ConsultasList() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const url = "https://api-clinica-2a.onrender.com/consultas";
    fetch(url)
      .then(response => response.ok ? response.json() : [])
      .then(data => setConsultas(Array.isArray(data) ? data : [data]));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Tem certeza que deseja excluir a consulta com ID ${id}?`)) {
      setConsultas(consultas.filter(consulta => consulta.id !== id));
      alert(`Consulta com ID ${id} excluída com sucesso!`);
    }
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Lista de Consultas</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Médico</th>
            <th className={styles.th}>Paciente</th>
            <th className={styles.th}>Tipo de Consulta</th>
            <th className={styles.th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {consultas.length > 0 ? (
            consultas.map((consulta) => (
              <tr key={consulta.id} className={styles.tr}>
                <td className={styles.td}>{consulta.id}</td>
                <td className={styles.td}>{consulta.medico}</td>
                <td className={styles.td}>{consulta.paciente}</td>
                <td className={styles.td}>{consulta.tipo}</td>
                <td className={styles.td}>
                  <button 
                    className={styles.button} 
                    onClick={() => handleDelete(consulta.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className={styles.td} style={{ textAlign: "center" }}>
                Nenhuma consulta encontrada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}