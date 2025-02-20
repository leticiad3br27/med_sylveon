"use client";
import { useState, useEffect } from "react";
import styles from "./Excluir.module.css"; 

export default function ExcluirPaciente() {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, []);

  const handleSelectChange = (e) => {
    const pacienteSelecionado = pacientes.find(paciente => paciente.id === Number(e.target.value));
    setSelectedPaciente(pacienteSelecionado);
  };

  const handleConfirmDelete = () => {
    if (selectedPaciente) {
      alert(`Paciente ${selectedPaciente.nome} excluído com sucesso!`);
      setPacientes(pacientes.filter(paciente => paciente.id !== selectedPaciente.id));
      setSelectedPaciente(null); // Reseta a seleção
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Excluir Paciente</h1>
      <select onChange={handleSelectChange} className={styles.input}>
        <option value="">Selecione um Paciente</option>
        {pacientes.map(paciente => (
          <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
        ))}
      </select>
      {selectedPaciente && (
        <div className={styles.confirmation}>
          <p>Você tem certeza que deseja excluir o paciente <strong>{selectedPaciente.nome}</strong>?</p>
          <button onClick={handleConfirmDelete} className={styles.button}>Confirmar Exclusão</button>
        </div>
      )}
    </div>
  );
}