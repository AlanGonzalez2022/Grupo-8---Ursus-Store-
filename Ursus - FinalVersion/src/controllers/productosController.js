const fs = require('fs');
const path = require('path');
const { Association, Op } = require('sequelize');
const db = require("../../database/models")

let productosController = {
  
  categorias: function (req, res) {
    res.render('./products/categorias')
  },
  
  //Categorías Productos nos muestra en nuestro proyecto el LISTADO de PRODUCTOS POR CATEGORÍA

  categoriasProductos: function (req, res) {
    console.log(req.query.query);
    db.Producto.findAll()
      .then(producto => {
        res.render('./products/productosporcategoria.ejs', { producto })
      })
  },

  detalleProducto: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: [{ association: "generos" }, { association: "talles" }]
    })
      .then(idProducto => {
        res.render('./products/detalle-producto.ejs', { idProducto:idProducto })
      })
  },

  shoppingCart: function (req, res) {
    res.render('./products/shopping-cart.ejs')
  },

  buscar: function(req, res){
    let encontrado = req.query.search
    console.log(encontrado);
    db.Producto.findAll({
        where: {
            nombre: {[Op.like]: "%" + encontrado + "%"}          
        }
    })
    .then(encontrada => {
      console.log(encontrada);
      res.render("./products/buscar", {encontrada})
    })
  },
  
  crear: function (req, res) {
    let categorias = db.Categoria.findAll()
    let talles = db.Talle.findAll()
    let generos = db.Genero.findAll()
    Promise.all([categorias, talles, generos])
      .then(function ([categoriasData, tallesData, generosData]) {
        res.render('./products/crearProducto.ejs', { categoriasData, tallesData, generosData })
      })
      .catch(error => {
        console.log(error);
      })
  },

  crearProducto: async function (req, res) {
    // Para traer el ID del producto y el nombre

    let ProductoNombre = await db.Producto.findOne({
      where: {nombre: req.body.nombre}
    })
    
    let productoEncontrado = await db.Producto.findAll()

    let arrayId = productoEncontrado.map(id => {
      return id.id
    })
    let idProducto = arrayId.pop()

    if (ProductoNombre.nombre === req.body.nombre) {
      
      await db.productoTalle.create({
        idProducto: ProductoNombre.id,
        idTalle: req.body.talle
      })

      await db.productoGenero.create({
        idProducto: ProductoNombre.id,
        idGenero: req.body.genero
      })

    }else{

    await db.Producto.create({
      nombre: req.body.nombre,
      idCategoria: req.body.genero,
      precio: req.body.precio,
      imagen: req.files[0].filename,
      idTalle: req.body.talle,
      idGenero: req.body.genero
    }),


      await db.productoTalle.create({
        idProducto: idProducto + 1,
        idTalle: req.body.talle
      })

    await db.productoGenero.create({
      idProducto: idProducto + 1,
      idGenero: req.body.genero
    })
  }
    res.redirect("/productosporcategoria")

  },

  editar: function (req, res) {
    let productos = db.Producto.findByPk(req.params.id)
    let categorias = db.Categoria.findAll()
    let talles = db.Talle.findAll()
    let generos = db.Genero.findAll()

    Promise.all([productos, categorias, talles, generos])
      .then(([producto, categoria, talle, genero]) => {
        res.render('./products/editarProducto.ejs', { producto, categoria, talle, genero })
      })
  },

  editarProducto: function (req, res) {
    db.Producto.update({
      nombre: req.body.nombre,
      idCategoria: req.body.genero,
      precio: req.body.precio,
      imagen: req.files[0].filename,
    },
      { where: { id: req.params.id } }),

      res.redirect("/productosporcategoria")
  },

  eliminarProducto: function (req, res) {
    db.Producto.destroy({
      where: {
        id: req.params.id
      }
    })

  },
}


module.exports = productosController;