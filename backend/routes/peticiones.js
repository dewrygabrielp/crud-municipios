const express = require('express');
const router = express.Router();
const pool = require('../db');

// Crear petición
router.post('/', async (req, res) => {
  const { descripcion, municipio_id } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO peticiones (descripcion, municipio_id) VALUES ($1, $2) RETURNING *',
      [descripcion, municipio_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error al crear petición:', err.message);
    res.status(500).json({ error: 'Error al crear la petición' });
  }
});

// Listar peticiones
router.get('/', async (_req, res) => {
  try {
    const result = await pool.query(
      'SELECT p.id, p.descripcion, m.nombre AS municipio FROM peticiones p JOIN municipios m ON p.municipio_id = m.id'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error al listar peticiones:', err.message);
    res.status(500).json({ error: 'Error al obtener las peticiones' });
  }
});

// Eliminar petición
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM peticiones WHERE id = $1', [req.params.id]);
    res.sendStatus(204);
  } catch (err) {
    console.error(' Error al eliminar petición:', err.message);
    res.status(500).json({ error: 'Error al eliminar la petición' });
  }
});

module.exports = router;
