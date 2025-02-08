"use client";
import { useState, useEffect } from "react";
import styles from "./CriaConsulta.module.css";

export default function CadastroConsulta() {
  const [pacientes, setPacientes] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [formData, setFormData] = useState({
    paciente: "",
    medico: "",
    especialidade: "",
    data: "",
    horario: "",
    tipo: ""
  });
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, []);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };
    
    if (name === "medico") {
      const selectedMedico = medicos.find(medico => medico.id === Number(value));
      updatedFormData.especialidade = selectedMedico ? selectedMedico.especialidade : "";
    }
    
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmado(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastro de Consulta</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          name="paciente"
          value={formData.paciente}
          onChange={handleChange}
          required
          className={styles.input}
        >
          <option value="">Selecione um Paciente</option>
          {pacientes.map(paciente => (
            <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
          ))}
        </select>

        <select
          name="medico"
          value={formData.medico}
          onChange={handleChange}
          required
          className={styles.input}
        >
          <option value="">Selecione um Médico</option>
          {medicos.map(medico => (
            <option key={medico.id} value={medico.id}>{medico.nome}</option>
          ))}
        </select>

        <input
          type="text"
          name="especialidade"
          value={formData.especialidade}
          readOnly
          className={styles.input}
        />

        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
          className={styles.input}
        >
          <option value="">Convênio ou Particular?</option>
          <option value="Convenio">Convênio</option>
          <option value="Particular">Particular</option>
        </select>

        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <input
          type="time"
          name="horario"
          value={formData.horario}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.button}>Confirmar Consulta</button>
      </form>

      {confirmado && (
        <p className={styles.confirmMessage}>Consulta cadastrada com sucesso!</p>
      )}
    </div>
  );
}