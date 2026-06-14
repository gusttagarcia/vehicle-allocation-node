// src/config/database.js

const { Pool } = require('pg');

require('dotenv').config(); // Avisa o Node para ler o arquivo .env

// conexões com os dados do .env
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Testa a conexão assim que o arquivo é chamado
pool.on('connect', () => {
    console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};