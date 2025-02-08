"use client";
import { useState, useEffect } from "react";
import styles from "./EditarConsulta.module.css";

export default function EditarConsulta() {
  const [consultas, setConsultas] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [selectedConsulta, setSelectedConsulta] = useState(null);
  const [formData, setFormData] = useState({
    medicoId: "",
    pacienteId: "",
    tipo: "",
    data: "",
    horario: ""
  });

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/consultas")
      .then(response => response.ok ? response.json() : [])
      .then(data => setConsultas(Array.isArray(data) ? data : [data]));

    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));

    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, []);

  const handleSelectChange = (e) => {
    const consultaSelecionada = consultas.find(consulta => consulta.id === Number(e.target.value));
    setSelectedConsulta(consultaSelecionada);
    if (consultaSelecionada) {
      setFormData({
        medicoId: consultaSelecionada.medicoId,
        pacienteId: consultaSelecionada.pacienteId,
        tipo: consultaSelecionada.tipo,
        data: consultaSelecionada.data || "",
        horario: consultaSelecionada.horario || ""
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados da consulta atualizados");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar Consulta</h1>
      <select onChange={handleSelectChange} className={styles.input}>
        <option value="">Selecione uma Consulta</option>
        {consultas.map(consulta => (
          <option key={consulta.id} value={consulta.id}>
            {`Consulta #${consulta.id}`}
          </option>
        ))}
      </select>
      {selectedConsulta && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <select name="medicoId" value={formData.medicoId} onChange={handleChange} className={styles.input}>
            <option value="">Selecione um Médico</option>
            {medicos.map(medico => (
              <option key={medico.id} value={medico.id}>{medico.nome}</option>
            ))}
          </select>

          <select name="pacienteId" value={formData.pacienteId} onChange={handleChange} className={styles.input}>
            <option value="">Selecione um Paciente</option>
            {pacientes.map(paciente => (
              <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
            ))}
          </select>

          <input
            type="text"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className={styles.input}
            placeholder="Tipo de Consulta"
          />

          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            className={styles.input}
          />

          <button type="submit" className={styles.button}>Salvar Alterações</button>
        </form>
      )}
    </div>
  );
}
