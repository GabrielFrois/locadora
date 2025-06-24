-- Apaga e recria o banco
DROP DATABASE IF EXISTS locadora;
CREATE DATABASE locadora;
\c locadora;

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

-- Tabela de gêneros
CREATE TABLE generos (
    id_genero SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- Tabela de relação N:N entre filmes e gêneros
CREATE TABLE filme_genero (
    id_filme INT REFERENCES filmes(id_filme),
    id_genero INT REFERENCES generos(id_genero),
    PRIMARY KEY (id_filme, id_genero)
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


INSERT INTO generos (nome) VALUES ('Drama'), ('Crime'), ('Histórico');

INSERT INTO filmes (nome, ano, diretor, sinopse, capa_url)
VALUES 
('The Shawshank Redemption', 1994, 'Frank Darabont', 'Um banqueiro injustamente condenado faz amizade na prisão e busca redenção.', ''),
('The Godfather', 1972, 'Francis Ford Coppola', 'Saga da família mafiosa Corleone.', ''),
('Schindler''s List', 1993, 'Steven Spielberg', 'Oskar Schindler salva judeus durante o Holocausto.', '');

INSERT INTO filme_genero (id_filme, id_genero) VALUES
(1, 1), (1, 2),
(2, 1), (2, 2),
(3, 1), (3, 3);
