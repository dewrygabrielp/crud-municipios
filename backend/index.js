const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const provinciasRouter = require('./routes/provincias');
const municipiosRouter = require('./routes/municipios');
const peticionesRouter = require('./routes/peticiones');

app.use(cors());
app.use(express.json());

// Enrutadores
app.use('/api/provincias', provinciasRouter);
app.use('/api/municipios', municipiosRouter);
app.use('/api/peticiones', peticionesRouter);

app.get('/', (req, res) => {
  res.send('API funcionando 👌');
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
