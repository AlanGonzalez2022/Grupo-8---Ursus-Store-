//requiriendo express
const express = require('express');
const { read } = require('fs');
const methodOverride = require('method-override');
const path =  require('path');
const app = express();

//ejecución de express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'src/views'));

//template engine ejs seteado
app.set('view engine', 'ejs')

//constantes para las rutas
const mainRoutes = require('./src/routes/main.js');
const mainProducts = require ('./src/routes/categorias.js');





//recursos estáticos en carpeta 'public'
//const publicPath = path.resolve(__dirname, './public');

app.use(express.static("public"));


//direccionando a las respectivas rutas
app.use('/', mainRoutes)
app.use('/', mainProducts)
// app.use('/detalle-producto/:id', mainProducts)
// app.use('/editarProducto/:id', mainProducts)
// app.use('/eliminarProducto/:id', mainProducts)


//servidor donde va a correr la web
app.listen(3032, () => {
    console.log('Servidor corriendo en el puerto 3032');
});

