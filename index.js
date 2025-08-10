require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// endpoint principal
app.get('/', (_req, res) => {
  res.send('Integración Continua funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
