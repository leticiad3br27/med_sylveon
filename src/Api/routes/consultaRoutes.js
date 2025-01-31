const express = require('express');
const ConsultaController = require('../controllers/consultaController');

const router = express.Router();
const consultaController = new ConsultaController();

// Rotas para consultas
router.post('/', consultaController.agendarConsulta.bind(consultaController));
router.get('/', consultaController.listarConsultas.bind(consultaController));
router.delete('/:id', consultaController.cancelarConsulta.bind(consultaController));

module.exports = router;