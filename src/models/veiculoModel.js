const db = require('../config/database');

const VeiculoModel = {
    
    // Buscar todos os veículos (Read)
    listarTodos: async () => {
        const query = 'SELECT * FROM veiculos ORDER BY id ASC';
        const resultado = await db.query(query);
        return resultado.rows;
    },

    // Buscar apenas um veículo pelo ID (Read)
    buscarPorId: async (id) => {
        const query = 'SELECT * FROM veiculos WHERE id = $1';
        const resultado = await db.query(query, [id]);
        return resultado.rows[0]; // Retorna só o objeto, não uma lista
    },

    // Cadastrar um novo veículo (Create)
    criar: async (veiculo) => {
        const query = `
            INSERT INTO veiculos (placa, marca, modelo, ano, disponivel) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING *;
        `;
        const valores = [veiculo.placa, veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.disponivel];
        const resultado = await db.query(query, valores);
        return resultado.rows[0];
    },

    // Atualizar dados de um veículo existente (Update)
    atualizar: async (id, veiculo) => {
        const query = `
            UPDATE veiculos 
            SET placa = $1, marca = $2, modelo = $3, ano = $4, disponivel = $5 
            WHERE id = $6 
            RETURNING *;
        `;
        const valores = [veiculo.placa, veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.disponivel, id];
        const resultado = await db.query(query, valores);
        return resultado.rows[0];
    },

    // Remover um veículo do sistema (Delete)
    deletar: async (id) => {
        const query = 'DELETE FROM veiculos WHERE id = $1 RETURNING *';
        const resultado = await db.query(query, [id]);
        return resultado.rows[0];
    }
};

module.exports = VeiculoModel;