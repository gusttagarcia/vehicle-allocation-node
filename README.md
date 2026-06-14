#  Sistema de Controle de Frota (Alocação de Veículos)

![Status](https://img.shields.io/badge/Status-MVP_Concluído-success?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)
![Bootstrap](https://img.shields.io/badge/Bootstrap-Frontend-7952B3?style=for-the-badge&logo=bootstrap)

##  Sobre o Projeto
Este é o MVP (Minimum Viable Product) de um Sistema de Alocação de Veículos. A aplicação foi desenvolvida utilizando a arquitetura **MVC (Model-View-Controller)**.

O sistema permite o gerenciamento completo da frota através de uma interface web conectada a uma API RESTful.

##  Funcionalidades 
- **C**reate: Cadastro de novos veículos na frota.
- **R**ead: Listagem dinâmica de todos os veículos cadastrados.
- **U**pdate: Atualização de dados e status de disponibilidade (Disponível/Alugado).
- **D**elete: Remoção segura de registros do banco de dados.

##  Arquitetura do Projeto

O projeto foi estruturado separando a inteligência de negócios (Backend) da interface visual (Frontend):

```text
vehicle-allocation-node/
├── public/                 # Frontend (Arquivos Estáticos)
│   ├── index.html          # Interface principal (Layout com Bootstrap)
│   └── js/
│       └── veiculos.js     # Lógica do front (Fetch API e Modais)
├── src/                    # Backend (Código Fonte Node.js)
│   ├── config/
│   │   └── database.js     # Conexão com o PostgreSQL
│   ├── controllers/
│   │   └── veiculosController.js # Lógica de requisição/resposta
│   ├── models/
│   │   └── veiculoModel.js # Comunicação direta com o banco (Queries SQL)
│   ├── routes/
│   │   └── veiculosRoutes.js # Mapeamento das URLs (Endpoints)
│   └── server.js           # Ponto de entrada do servidor Express
├── api.http                # Testes de rota nativos do WebStorm
├── package.json            # Dependências do Node.js
└── README.md               # Documentação do projeto

## ⚙️ Como executar o projeto na sua máquina

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina o [Git](https://git-scm.com), o [Node.js](https://nodejs.org/en/) e o [PostgreSQL](https://www.postgresql.org/).

### Passo a Passo

1. Clone o repositório:

git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
cd NOME_DO_REPOSITORIO

2. Instale as dependências do projeto:

npm install

3. Configure o Banco de Dados:

Abre o PostgreSQL esteja com o seu .env imbutido com suas credencias de acesso ao banco.

4. Incie o servidor:

npm start

5. Acesse o navegador através do local host
