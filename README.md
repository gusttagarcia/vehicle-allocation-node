# 🚗 Sistema de Controle de Frota

![Status](https://img.shields.io/badge/Status-MVP_Concluído-success?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

## 📋 Sobre o Projeto

MVP de um **Sistema de Alocação de Veículos** desenvolvido com arquitetura **MVC (Model-View-Controller)**. A aplicação oferece uma interface web para gerenciamento completo de frota, conectada a uma API RESTful.

> Projeto acadêmico de Engenharia de Software — unindo levantamento de requisitos funcionais com a construção de uma API estruturada em equipe.

---

## ✅ Funcionalidades

| Operação | Descrição |
|----------|-----------|
| **Create** | Cadastro de novos veículos na frota |
| **Read** | Listagem dinâmica de todos os veículos cadastrados |
| **Update** | Atualização de dados e status (Disponível / Alugado) |
| **Delete** | Remoção segura de registros do banco de dados |

---

## 🗂️ Arquitetura do Projeto

```
vehicle-allocation-node/
├── public/                         # Frontend (Arquivos Estáticos)
│   ├── index.html                  # Interface principal (Bootstrap)
│   └── front/
│       └── veiculos.js             # Lógica do front (Fetch API e Modais)
├── src/                            # Backend (Node.js)
│   ├── config/
│   │   └── database.js             # Conexão com o PostgreSQL
│   ├── controllers/
│   │   └── veiculosController.js   # Lógica de requisição/resposta
│   ├── models/
│   │   └── veiculoModel.js         # Queries SQL
│   ├── routes/
│   │   └── veiculosRoutes.js       # Mapeamento dos endpoints
│   └── server.js                   # Ponto de entrada do servidor Express
├── api/
│   └── api.http                    # Testes de rota 
├── package.json
└── README.md
```

---

## 🔌 Endpoints da API

Base URL: `http://localhost:3000`

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/veiculos` | Lista todos os veículos |
| `GET` | `/veiculos/:id` | Busca um veículo pelo ID |
| `POST` | `/veiculos` | Cadastra um novo veículo |
| `PUT` | `/veiculos/:id` | Atualiza um veículo existente |
| `DELETE` | `/veiculos/:id` | Remove um veículo |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [PostgreSQL](https://www.postgresql.org/)

### Passo a Passo

**1. Clone o repositório**
```bash
git clone https://github.com/gusttagarcia/vehicle-allocation-node.git
cd vehicle-allocation-node
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com base no exemplo abaixo:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=veiculos
```

**4. Configure o Banco de Dados**

Execute o script SQL para criar as tabelas:
```bash
psql -U postgres -f veiculos.sql
```

**5. Inicie o servidor**
```bash
npm start
```

**6. Acesse no navegador**
```
http://localhost:3000
```

---

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript
- **[Express](https://expressjs.com/)** — Framework para criação da API REST
- **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional
- **[node-postgres (pg)](https://node-postgres.com/)** — Driver de conexão com o PostgreSQL
- **[dotenv](https://github.com/motdotla/dotenv)** — Gerenciamento de variáveis de ambiente
- **[Bootstrap 5](https://getbootstrap.com/)** — Estilização da interface web

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
