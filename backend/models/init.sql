CREATE TABLE IF NOT EXISTS provincias (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS municipios (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  provincia_id INTEGER REFERENCES provincias(id)
);

CREATE TABLE IF NOT EXISTS peticiones (
  id SERIAL PRIMARY KEY,
  descripcion TEXT NOT NULL,
  municipio_id INTEGER REFERENCES municipios(id)
);
