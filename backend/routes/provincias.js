const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM provincias ORDER BY nombre');
    res.json(result.rows);
  } catch (err) {
    console.error(' Error al obtener provincias:', err.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
