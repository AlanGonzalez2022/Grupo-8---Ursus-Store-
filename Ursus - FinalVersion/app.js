//requiriendo express
const express = require('express');
const { read } = require('fs');
const path =  require('path');

//constantes para las rutas
const mainRoutes = require('./src/routes/main.js');
const mainProducts = require ('./src/routes/categorias.js');


//ejecución de express
const app = express();

app.set('views', path.join(__dirname, 'src/views'));

//template engine ejs seteado
app.set('view engine', 'ejs')

//recursos estáticos en carpeta 'public'
//const publicPath = path.resolve(__dirname, './public');

app.use(express.static("public"));

//direccionando a las respectivas rutas
app.use('/', mainRoutes)
app.use('/', mainProducts)
app.use('/detalle-producto/:id', mainProducts)

// app.use('/register', mainRoutes)
// app.use('/login', mainRoutes)

// app.use('/categorias', mainProducts)
// app.use('/productosporcategoria', mainProducts)
// app.use('/shopping-cart', mainProducts)
// app.use('/crearproducto', mainProducts)
// app.use('/editarproducto', mainProducts)


//servidor donde va a correr la web
app.listen(3032, () => {
    console.log('Servidor corriendo en el puerto 3032');
});

