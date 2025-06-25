import express from 'express';
import { Pool } from 'pg';

const router = express.Router();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'locadora',
  password: '123',
  port: 5432,
});

// Função para criar rotas GET padrão para cada tabela
function createRoutes(tabela: string) {
  router.get(`/${tabela}`, async (req, res) => {
    try {
      const result = await pool.query(`SELECT * FROM ${tabela}`);
      res.json(result.rows);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Erro desconhecido' });
      }
    }
  });

  router.get(`/${tabela}/:id`, async (req, res) => {
    const id = req.params.id;
    const idColuna = `id_${tabela === 'itens_locacao' ? 'item' : tabela.slice(0, -1)}`;
    try {
      const result = await pool.query(
        `SELECT * FROM ${tabela} WHERE ${idColuna} = $1`,
        [id]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Não encontrado' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Erro desconhecido' });
      }
    }
  });
}

['clientes', 'filmes', 'locacoes', 'itens_locacao', 'pagamentos'].forEach(createRoutes);

export default router;
