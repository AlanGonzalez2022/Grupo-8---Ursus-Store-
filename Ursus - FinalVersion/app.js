const express = require('express');
const { read } = require('fs');
const path=  require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use ( express.static(publicPath) );

app.listen(3032, () => {
    console.log('Servidor corriendo en el puerto 3032');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/categorias', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/categorias.html'));
});

