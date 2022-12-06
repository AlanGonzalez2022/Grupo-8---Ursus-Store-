//requiriendo express
const express = require('express');
const { read } = require('fs');
const methodOverride = require('method-override');
const path =  require('path');
const app = express();
const session = require("express-session")
const cookies = require("cookie-parser")

// MiddleWare a nivel Aplicación
const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware")
// const adminMiddleware = require("./src/middlewares/adminMiddleware")
//Ejecuciones
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'src/views'));
app.use(session({
    secret: "Secreeeet!!",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies())
app.use(userLoggedMiddleware);
// app.use(adminMiddleware);

//template engine ejs seteado
app.set('view engine', 'ejs')

//constantes para las rutas
const mainRoutes = require('./src/routes/main.js');
const mainProducts = require ('./src/routes/categorias.js');
const mainUsers = require("./src/routes/users.js")

//Ruta public
app.use(express.static("public"));


//direccionando a las respectivas rutas
app.use('/', mainRoutes)
app.use('/', mainProducts)
app.use('/', mainUsers)



//servidor donde va a correr la web
app.listen(3032, () => {
    console.log('Servidor corriendo en el puerto 3032');
});

