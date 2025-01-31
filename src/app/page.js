"use client"; // Indica que este componente é do lado do cliente
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Medico from './medico/Medico';
import Paciente from './paciente';
import Consulta from './consulta/Consulta';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/medico" element={<Medico />} />
        <Route path="/paciente" element={<Paciente />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
    </Router>
  );
};

export default App;