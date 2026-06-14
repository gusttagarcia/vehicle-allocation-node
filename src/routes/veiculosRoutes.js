// src/routes/veiculosRoutes.js

const express = require('express');

const router = express.Router(); // Ferramenta do Express para criar rotas

// Importa o Controller
const veiculosController = require('../controllers/veiculosController');

// Mapeamento: (Método HTTP + Caminho -> Função no Controller)
router.get('/', veiculosController.listarTodos);
router.get('/:id', veiculosController.buscarPorId);
router.post('/', veiculosController.criar);
router.put('/:id', veiculosController.atualizar);
router.delete('/:id', veiculosController.deletar);

// Exporta o roteador
module.exports = router;