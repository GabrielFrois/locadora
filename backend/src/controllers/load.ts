// src/controllers/setupDatabase.ts
import { Client } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const client = new Client({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  database: 'postgres', // conecta ao postgres para criar a base
  port: 5432,
});

const run = async () => {
  await client.connect();

  // Apagar e recriar banco
  await client.query(`DROP DATABASE IF EXISTS locadora`);
  await client.query(`CREATE DATABASE locadora`);
  await client.end();

  // Conectar ao novo banco
  const db = new Client({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    database: 'locadora',
    port: 5432,
  });
  await db.connect();

  // Criar tabelas
  const ddlPath = path.join(__dirname, '../../data/comandos.sql');
  const ddl = fs.readFileSync(ddlPath, 'utf-8');
  await db.query(ddl);

  // Helper para inserir dados de um arquivo
  const insertFromFile = async (file: string, table: string, fields: string[]) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/' + file), 'utf-8'));
    for (const item of data) {
      const values = fields.map(f => item[f]);
      const placeholders = fields.map((_, i) => `$${i + 1}`).join(',');
      await db.query(
        `INSERT INTO ${table} (${fields.join(',')}) VALUES (${placeholders})`,
        values
      );
    }
  };


  // Inserções
  await insertFromFile('clientes.json', 'clientes', ['id_cliente', 'nome', 'endereco', 'telefone', 'email']);
  await insertFromFile('filmes.json', 'filmes', ['id_filme', 'titulo', 'titulo_original', 'ano', 'diretor', 'sinopse', 'capa_url']);
  await insertFromFile('locacoes.json', 'locacoes', ['id_locacao', 'id_cliente', 'data_locacao', 'data_prevista_devolucao', 'data_devolucao', 'status']);
  await insertFromFile('itens_locacao.json', 'itens_locacao', ['id_item', 'id_locacao', 'id_filme', 'valor', 'multa_aplicada']);
  await insertFromFile('pagamentos.json', 'pagamentos', ['id_pagamento', 'id_locacao', 'valor', 'data_pagamento', 'forma_pagamento']);

  console.log('Tabelas criadas e dados inseridos com sucesso.');
  await db.end();
};

run().catch(err => {
  console.error('Erro ao configurar o banco:', err);
});