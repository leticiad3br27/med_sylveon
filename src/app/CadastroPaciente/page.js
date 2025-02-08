"use client";
import { useState } from "react";
import styles from "./cadastro.module.css";

export default function CadastroPaciente() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    dataNascimento: ""
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
      <h1 className={styles.title}>Cadastro de Paciente</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Paciente"
          value={formData.nome}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formData.cpf}
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
          type="date"
          name="dataNascimento"
          placeholder="Data de Nascimento"
          value={formData.dataNascimento}
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
