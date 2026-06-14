// Importa o Model para o Controller usar o banco
const VeiculoModel = require('../models/veiculoModel');

const VeiculosController = {

    // Função para Listar Todos
    listarTodos: async (req, res) => {
        try {
            const veiculos = await VeiculoModel.listarTodos();
            res.status(200).json(veiculos);
        } catch (erro) {
            console.error("Erro ao listar veículos:", erro);
            res.status(500).json({ mensagem: "Erro interno no servidor." });
        }
    },

    // Função para Buscar por ID
    buscarPorId: async (req, res) => {
        try {
            // Extrai o ID que o usuário digitou na URL (ex: /veiculos/5)
            const id = req.params.id;
            const veiculo = await VeiculoModel.buscarPorId(id);

            // Se o banco não achar nada, devolve o erro 404
            if (!veiculo) {
                return res.status(404).json({ mensagem: "Veículo não encontrado." });
            }

            res.status(200).json(veiculo);
        } catch (erro) {
            console.error("Erro ao buscar veículo:", erro);
            res.status(500).json({ mensagem: "Erro interno no servidor." });
        }
    },

    // Função para Criar um Veículo Novo
    criar: async (req, res) => {
        try {
            // Pega os dados do carro que vieram no "corpo" da requisição
            const dadosNovoVeiculo = req.body;

            const veiculoCriado = await VeiculoModel.criar(dadosNovoVeiculo);

            // 201 Sucesso
            res.status(201).json(veiculoCriado);
        } catch (erro) {
            console.error("Erro ao criar veículo:", erro);
            res.status(500).json({ mensagem: "Erro ao cadastrar. Verifique os dados." });
        }
    },

    // Função para Atualizar um Veículo
    atualizar: async (req, res) => {
        try {
            const id = req.params.id;
            const dadosAtualizados = req.body;

            const veiculoAtualizado = await VeiculoModel.atualizar(id, dadosAtualizados);

            if (!veiculoAtualizado) {
                return res.status(404).json({ mensagem: "Veículo não encontrado para atualização." });
            }

            res.status(200).json(veiculoAtualizado);
        } catch (erro) {
            console.error("Erro ao atualizar veículo:", erro);
            res.status(500).json({ mensagem: "Erro interno no servidor." });
        }
    },

    // Função para Deletar um Veículo
    deletar: async (req, res) => {
        try {
            const id = req.params.id;
            const veiculoDeletado = await VeiculoModel.deletar(id);

            if (!veiculoDeletado) {
                return res.status(404).json({ mensagem: "Veículo não encontrado para deleção." });
            }

            res.status(200).json({ mensagem: "Veículo deletado com sucesso!", veiculo: veiculoDeletado });
        } catch (erro) {
            console.error("Erro ao deletar veículo:", erro);
            res.status(500).json({ mensagem: "Erro interno no servidor." });
        }
    }
};

module.exports = VeiculosController;