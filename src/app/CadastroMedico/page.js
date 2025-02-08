"use client";
import { useState } from "react";
import styles from "./cadastro.module.css";

export default function CadastroMedico() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    crm: "",
    especialidade: ""
  });
  const [confirmado, setConfirmado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmado(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastro de Médico</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Médico"
          value={formData.nome}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="crm"
          placeholder="CRM"
          value={formData.crm}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="especialidade"
          placeholder="Especialidade"
          value={formData.especialidade}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Confirmar Cadastro</button>
      </form>

      {confirmado && (
        <p className={styles.confirmMessage}>Cadastro confirmado com sucesso!</p>
      )}
    </div>
  );
}
