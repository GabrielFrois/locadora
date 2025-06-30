-- Tabela de filmes
CREATE TABLE filmes (
    id_filme SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    titulo_original VARCHAR(100) NOT NULL,
    ano INT,
    diretor VARCHAR(100),
    sinopse TEXT,
    capa_url TEXT
);

-- Tabela de clientes
CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(150) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100)
);

-- Tabela de locações
CREATE TABLE locacoes (
    id_locacao SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES clientes(id_cliente),
    data_locacao DATE NOT NULL,
    data_prevista_devolucao DATE NOT NULL,
    data_devolucao DATE,
    status VARCHAR(20) DEFAULT 'aberta' -- aberta, devolvida, atrasada
);

-- Itens da locação (quais filmes foram alugados)
CREATE TABLE itens_locacao (
    id_item SERIAL PRIMARY KEY,
    id_locacao INT REFERENCES locacoes(id_locacao),
    id_filme INT REFERENCES filmes(id_filme),
    valor DECIMAL(8,2),
    multa_aplicada DECIMAL(8,2) DEFAULT 0
);

-- Pagamentos
CREATE TABLE pagamentos (
    id_pagamento SERIAL PRIMARY KEY,
    id_locacao INT REFERENCES locacoes(id_locacao),
    valor DECIMAL(8,2) NOT NULL,
    data_pagamento DATE NOT NULL,
    forma_pagamento VARCHAR(20)
);