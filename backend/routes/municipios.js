const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const { provincia_id } = req.query;

  if (!provincia_id) {
    return res.status(400).json({ error: 'provincia_id es requerido' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM municipios WHERE provincia_id = $1 ORDER BY nombre',
      [provincia_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener municipios:', err.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
