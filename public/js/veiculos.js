
// 1. Carrega o banco

async function carregarVeiculos() {
    try {
        const resposta = await fetch('/veiculos');
        const veiculos = await resposta.json();
        const corpoTabela = document.getElementById('corpo-tabela');

        corpoTabela.innerHTML = '';

        if (veiculos.length === 0) {
            corpoTabela.innerHTML = '<tr><td colspan="7" class="text-center">Nenhum veículo cadastrado.</td></tr>';
            return;
        }

        veiculos.forEach(veiculo => {
            const statusVisual = veiculo.disponivel
                ? '<span class="badge bg-success">Disponível</span>'
                : '<span class="badge bg-danger">Alugado</span>';

            const linhaHTML = `
                <tr>
                    <td>${veiculo.id}</td>
                    <td class="fw-bold">${veiculo.placa}</td>
                    <td>${veiculo.marca}</td>
                    <td>${veiculo.modelo}</td>
                    <td>${veiculo.ano}</td>
                    <td>${statusVisual}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary" onclick="abrirModal(${veiculo.id}, '${veiculo.placa}', '${veiculo.marca}', '${veiculo.modelo}', ${veiculo.ano}, ${veiculo.disponivel})">Editar</button>
                        <button class="btn btn-sm btn-outline-danger" onclick="excluirVeiculo(${veiculo.id})">Excluir</button>
                    </td>
                </tr>
            `;
            corpoTabela.innerHTML += linhaHTML;
        });

    } catch (erro) {
        console.error('Erro ao buscar veículos:', erro);
        document.getElementById('corpo-tabela').innerHTML = '<tr><td colspan="7" class="text-center text-danger">Erro de conexão.</td></tr>';
    }
}


// 2. Excluir

async function excluirVeiculo(id) {
    if (confirm("Tem certeza que deseja excluir este veículo?")) {
        try {
            await fetch(`/veiculos/${id}`, { method: 'DELETE' });
            carregarVeiculos(); // Recarrega a tabela na hora
        } catch (erro) {
            alert("Erro ao excluir veículo.");
        }
    }
}


// 3. CONTROLE DO MODAL (A Janela Flutuante)

let modalInstancia;

function abrirModal(id = '', placa = '', marca = '', modelo = '', ano = '', disponivel = true) {
    document.getElementById('veiculoId').value = id;
    document.getElementById('placa').value = placa;
    document.getElementById('marca').value = marca;
    document.getElementById('modelo').value = modelo;
    document.getElementById('ano').value = ano;

    document.getElementById('disponivel').value = disponivel.toString();
    document.getElementById('modalTitulo').innerText = id ? "Editar Veículo" : "Novo Veículo";

    if (!modalInstancia) {
        modalInstancia = new bootstrap.Modal(document.getElementById('modalVeiculo'));
    }
    modalInstancia.show(); //salta a janela no meio da tela
}


// 4. Salvar ou Atualizar

async function salvarVeiculo() {
    const id = document.getElementById('veiculoId').value;

    const veiculo = {
        placa: document.getElementById('placa').value,
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        ano: parseInt(document.getElementById('ano').value),
        disponivel: document.getElementById('disponivel').value === 'true'
    };

    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `/veiculos/${id}` : '/veiculos';

    try {
        await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(veiculo)
        });

        modalInstancia.hide();
        carregarVeiculos();

    } catch (erro) {
        console.error("Erro ao salvar:", erro);
        alert("Falha ao salvar o veículo.");
    }
}


// 5. Inicio automatico

carregarVeiculos();