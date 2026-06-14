// src/server.js
const express = require('express');
const app = express();
const PORT = 3000;

// 1. Importa as rotas
const veiculosRoutes = require('./routes/veiculosRoutes');

app.use(express.json());

// 2. Avisa o servidor: "URL que comece com /veiculos, vai para esse arquivo"
app.use('/veiculos', veiculosRoutes);

// Rota de teste padrão
app.get('/', (req, res) => {
    res.json({ mensagem: "API de Alocação de Veículos funcionando com sucesso!" });
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(` Servidor rodando em: http://localhost:${PORT}`);
    console.log(`=========================================`);
});