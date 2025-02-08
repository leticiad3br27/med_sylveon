"use client";
import { useState, useEffect } from "react";
import styles from "./Editar.module.css";

export default function EditarPaciente() {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cpf: ""
  });

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, []);

  const handleSelectChange = (e) => {
    const pacienteSelecionado = pacientes.find(paciente => paciente.id === Number(e.target.value));
    setSelectedPaciente(pacienteSelecionado);
    if (pacienteSelecionado) {
      setFormData({
        nome: pacienteSelecionado.nome,
        telefone: pacienteSelecionado.telefone,
        email: pacienteSelecionado.email,
        cpf: pacienteSelecionado.cpf
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados atualizados");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar Paciente</h1>
      <select onChange={handleSelectChange} className={styles.input}>
        <option value="">Selecione um Paciente</option>
        {pacientes.map(paciente => (
          <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
        ))}
      </select>


      {selectedPaciente && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Salvar Alterações</button>
        </form>
      )}
    </div>
  );
}
