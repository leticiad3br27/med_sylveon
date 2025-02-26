"use client";
import { useState, useEffect } from "react";
import styles from "./tabela.module.css";
export default function ConsultasList() {
  const [consultas, setConsultas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const url = "https://api-clinica-2a.onrender.com/consultas";
    fetch(url)
      .then(response => response.ok ? response.json() : [])
      .then(data => setConsultas(Array.isArray(data) ? data : [data]));
  }, []);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredConsultas = consultas.filter(consulta => {
    const medico = consulta.medico.toLowerCase();
    const paciente = consulta.paciente.toLowerCase();
    const term = searchTerm.toLowerCase();
    return medico.includes(term) || paciente.includes(term);
  });
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Lista de Consultas</h1>
      <input 
        type="text" 
        placeholder="Buscar por Médico ou Paciente" 
        value={searchTerm} 
        onChange={handleSearchChange} 
        className={styles.searchInput}
      />
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Médico</th>
            <th className={styles.th}>Paciente</th>
            <th className={styles.th}>Tipo de Consulta</th>
          </tr>
        </thead>
        <tbody>
          {filteredConsultas.length > 0 ? (
            filteredConsultas.map((consulta) => (
              <tr key={consulta.id} className={styles.tr}>
                <td className={styles.td}>{consulta.id}</td>
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