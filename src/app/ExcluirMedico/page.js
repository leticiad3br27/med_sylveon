"use client";
import { useState, useEffect } from "react";
import styles from "./Excluir.module.css"; 

export default function ExcluirMedico() {
  const [Medicos, setMedicos] = useState([]);
  const [selectedMedico, setSelectedMedico] = useState(null);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/Medicos")
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));
  }, []);

  const handleSelectChange = (e) => {
    const MedicoSelecionado = Medicos.find(Medico => Medico.id === Number(e.target.value));
    setSelectedMedico(MedicoSelecionado);
  };

  const handleConfirmDelete = () => {
    if (selectedMedico) {
      alert(`Medico ${selectedMedico.nome} excluído com sucesso!`);
      setMedicos(Medicos.filter(Medico => Medico.id !== selectedMedico.id));
      setSelectedMedico(null);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Excluir Medico</h1>
      <select onChange={handleSelectChange} className={styles.input}>
        <option value="">Selecione um Medico</option>
        {Medicos.map(Medico => (
          <option key={Medico.id} value={Medico.id}>{Medico.nome}</option>
        ))}
      </select>
      {selectedMedico && (
        <div className={styles.confirmation}>
          <p>Você tem certeza que deseja excluir o Medico <strong>{selectedMedico.nome}</strong>?</p>
          <button onClick={handleConfirmDelete} className={styles.button}>Confirmar Exclusão</button>
        </div>
      )}
    </div>
  );
}