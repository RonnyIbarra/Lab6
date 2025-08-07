const express = require('express');
const app = express();
const PORT = process.env.PORT;

// Endpoint
app.get('/', (_req, res) => {
    res.send('Integración Continua funcionando!');
});

app.listen(PORT, () => { 
    console.log(`Servidor en puerto ${PORT}`); 
});
