const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_municipios',
  password: 'tu_contraseña',
  port: 5432,
});

module.exports = pool;
