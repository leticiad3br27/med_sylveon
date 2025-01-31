const express = require('express');
const MedicoController = require('../controllers/medicoController');

const router = express.Router();
const medicoController = new MedicoController();

router.post('/', medicoController.create);
router.get('/', medicoController.getAll);
router.get('/:id', medicoController.getById);
router.put('/:id', medicoController.update);
router.delete('/:id', medicoController.delete);

module.exports = router;