"use client";
import { useState, useEffect } from "react";
import styles from "./EditarMedico.module.css";

export default function EditarMedico() {
  const [medicos, setMedicos] = useState([]);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    especialidade: "",
    telefone: "",
    email: ""
  });

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));
  }, []);

  const handleSelectChange = (e) => {
    const medicoSelecionado = medicos.find(medico => medico.id === Number(e.target.value));
    setSelectedMedico(medicoSelecionado);
    if (medicoSelecionado) {
      setFormData({
        nome: medicoSelecionado.nome,
        especialidade: medicoSelecionado.especialidade,
        telefone: medicoSelecionado.telefone,
        email: medicoSelecionado.email
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
      <h1 className={styles.title}>Editar Médico</h1>
      <select onChange={handleSelectChange} className={styles.input}>
        <option value="">Selecione um Médico</option>
        {medicos.map(medico => (
          <option key={medico.id} value={medico.id}>{medico.nome}</option>
        ))}
      </select>
      {selectedMedico && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="especialidade"
            value={formData.especialidade}
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
          <button type="submit" className={styles.button}>Salvar Alterações</button>
        </form>
      )}
    </div>
  );
}
