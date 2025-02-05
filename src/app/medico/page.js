"use client";

import { useEffect, useState } from 'react';
import { listarMedicos, buscarMedicoPorEspecialidade } from'../api/medico/medico';
import { adicionarConsulta } from '../api/servico/servicoConsulta';
import Link from 'next/link';
import styles from './MedicoPage.module.css';

export default function MedicoPage() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [especialidade, setEspecialidade] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal
  const [selectedMedico, setSelectedMedico] = useState(null); // Médico selecionado para agendar consulta
  const [consultaData, setConsultaData] = useState({ // Estado para os dados da consulta
    pacienteId: '',
    data: '',
    horario: '',
  });

  const fetchMedicos = async (especialidade = '') => {
    try {
      const data = especialidade ? await buscarMedicoPorEspecialidade(especialidade) : await listarMedicos();
      console.log('Dados recebidos:', data);
      setMedicos(data);
    } catch (err) {
      console.error('Erro ao carregar médicos:', err);
      setError(err.message || 'Erro ao carregar médicos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicos();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (especialidade.trim() === '') {
      setError('Por favor, insira uma especialidade válida.');
      return;
    }
    setLoading(true);
    fetchMedicos(especialidade);
  };

  // Função para abrir o modal de agendamento
  const openAgendarConsultaModal = (medico) => {
    setSelectedMedico(medico);
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedMedico(null);
    setConsultaData({ pacienteId: '', data: '', horario: '' });
  };

  // Função para lidar com o envio do formulário de agendamento
  const handleAgendarConsulta = async (e) => {
    e.preventDefault();
    if (!selectedMedico) return;

    try {
      const novaConsulta = {
        medicoId: selectedMedico.id,
        pacienteId: consultaData.pacienteId,
        data: consultaData.data,
        horario: consultaData.horario,
      };

      const response = await adicionarConsulta(novaConsulta);
      console.log('Consulta agendada:', response);
      alert('Consulta agendada com sucesso!');
      closeModal();
    } catch (err) {
      console.error('Erro ao agendar consulta:', err);
      setError('Erro ao agendar consulta. Tente novamente.');
    }
  };

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Lista de Médicos</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          placeholder="Buscar por especialidade"
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p className={styles.loading}>Carregando...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Especialidade</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map(medico => (
              <tr key={medico.id}>
                <td>
                  <Link href={`/medico/${medico.id}`} className={styles.link}>{medico.nome}</Link>
                </td>
                <td>{medico.especialidade}</td>
                <td>{medico.telefone}</td>
                <td>
                  <button onClick={() => openAgendarConsultaModal(medico)}>Agendar Consulta</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal para agendar consulta */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Agendar Consulta com {selectedMedico?.nome}</h2>
            <form onSubmit={handleAgendarConsulta}>
              <div>
                <label>ID do Paciente:</label>
                <input
                  type="text"
                  value={consultaData.pacienteId}
                  onChange={(e) => setConsultaData({ ...consultaData, pacienteId: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Data:</label>
                <input
                  type="date"
                  value={consultaData.data}
                  onChange={(e) => setConsultaData({ ...consultaData, data: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Horário:</label>
                <input
                  type="time"
                  value={consultaData.horario}
                  onChange={(e) => setConsultaData({ ...consultaData, horario: e.target.value })}
                  required
                />
              </div>
              <button type="submit">Agendar</button>
              <button type="button" onClick={closeModal}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}