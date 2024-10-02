const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController'); // Importa o controlador das tarefas

// rotas e métodos correspondentes no controlador

router.get('/', tarefaController.getTodasTarefas);
router.post('/', tarefaController.criarTarefa);
router.get('/:id', tarefaController.getTarefaPorId);
router.put('/:id', tarefaController.updateTarefa);
router.delete('/:id', tarefaController.deletarTarefa);

module.exports = router;
