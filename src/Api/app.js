const express = require('express');
const cors = require('cors');
const medicoRoutes = require('./routes/medicoRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const consultaRoutes = require('./routes/consultaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/Api/medicos', medicoRoutes);
app.use('/Api/pacientes', pacienteRoutes);
app.use('/Api/consultas', consultaRoutes);

module.exports = app;
