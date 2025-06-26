# Locadora de Filmes

Este projeto é uma aplicação web para gerenciamento de uma locadora de filmes, listagem e controle de clientes, filmes, locações e itens de locação. O sistema é dividido em **backend** (API RESTful com Node.js + Express + PostgreSQL) e **frontend** (React + Styled Components).

## Estrutura do Projeto
```
locadora/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │   ├── db.ts
│ │ │   ├── load.ts
│ │ │   └── routes.ts
│ │ └── index.ts
│ ├── data/
│ │     ├── comandos.sql
│ │     ├── clientes.json
│ │     ├── filmes.json
│ │     ├── locacoes.json
│ │     ├── itens_locacao.json
│ │     └── lpagamentos.json
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.tsx
│ └── package.json
```

## Funcionalidades

### Backend
- API REST com rotas para:
  - Clientes (`/clientes`)
  - Filmes (`/filmes`)
  - Locações (`/locacoes`)
  - Itens de locação (`/itens_locacao`)
- Integração com PostgreSQL
- Tratamento de erros e respostas padronizadas

### Frontend
- Interface intuitiva para gerenciar clientes, filmes e locações
- Estilização com Styled Components
- Consumo da API via `fetch` ou `axios`
- React Router para navegação entre páginas


## Tecnologias Utilizadas

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg (node-postgres)](https://node-postgres.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Router DOM](https://reactrouter.com/)

## Como Executar Localmente

### 1. Clone o repositório
```bash
git clone https://github.com/GabrielFrois/locadora.git
```

### 2. Instale as dependências
```bash
cd server
npm install
```

### 3. Crie o banco de dados, a tabela e insira os dados:
```bash
npm run load
```
### 4. Execute:
```bash
npm run dev
```
Estará rodando em: localhost:3000
