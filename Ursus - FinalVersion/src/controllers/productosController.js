const fs = require("fs");
const path = require("path");
const { Association, Op } = require("sequelize");
const db = require("../../database/models");
const { validationResult } = require("express-validator");

let productosController = {
  categorias: function (req, res) {
    res.render("./products/categorias");
  },

  costos:function (req,res){
    res.render("./products/costos")
  },
  
  //Categorías Productos nos muestra en nuestro proyecto el LISTADO de PRODUCTOS POR CATEGORÍA

  categoriasProductos: function (req, res) {
    db.Producto.findAll({
      where:{idCategoria: 1}
    }).then((producto) => {
      res.render("./products/productosporcategoria.ejs", { producto });
    });
  },

  Shorts: function (req, res) {
    db.Producto.findAll({
      where:{idCategoria: 2}
    }).then((producto) => {
      res.render("./products/shorts.ejs", { producto });
    });
  },

  Calzados: function (req, res) {
    db.Producto.findAll({
      where:{idCategoria: 3}
    }).then((producto) => {
      res.render("./products/calzados.ejs", { producto });
    });
  },

  Vestidos: function (req, res) {
    db.Producto.findAll({
      where:{idCategoria: 4}
    }).then((producto) => {
      res.render("./products/vestidos.ejs", { producto });
    });
  },

  Camisas: function (req, res) {
    db.Producto.findAll({
      where:{idCategoria: 5}
    }).then((producto) => {
      res.render("./products/camisas.ejs", { producto });
    });
  },

  Pantalones: function (req, res) {
    db.Producto.findAll({
      where:{idCategoria: 6}
    }).then((producto) => {
      res.render("./products/pantalones.ejs", { producto });
    });
  },


  detalleProducto: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: [{ association: "generos" }, { association: "talles" }],
    }).then((idProducto) => {
      res.render("./products/detalle-producto.ejs", { idProducto: idProducto });
    });
  },

  shoppingCart: function (req, res) {
    res.render("./products/shopping-cart.ejs");
  },

  buscar: function (req, res) {
    let encontrado = req.query.search;
    console.log(encontrado);
    db.Producto.findAll({
      where: {
        nombre: { [Op.like]: "%" + encontrado + "%" },
      },
    }).then((encontrada) => {
      console.log(encontrada);
      res.render("./products/buscar", { encontrada });
    });
  },

  crear: function (req, res) {
    let categorias = db.Categoria.findAll();
    let talles = db.Talle.findAll();
    let generos = db.Genero.findAll();
    Promise.all([categorias, talles, generos])
      .then(function ([categoriasData, tallesData, generosData]) {
        res.render("./products/crearProducto.ejs", {
          categoriasData,
          tallesData,
          generosData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  crearProducto: async function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      let categoriasData = await db.Categoria.findAll();
      let tallesData = await db.Talle.findAll();
      let generosData = await db.Genero.findAll();

      return res.render("products/crearproducto", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        categoriasData,
        tallesData,
        generosData,
      });
    }

    // Para traer el ID del producto y el nombre
    let ProductoNombre = await db.Producto.findOne({
      where: { nombre: req.body.nombre },
    });

    let productoEncontrado = await db.Producto.findAll();

    let arrayNombre = productoEncontrado.map((nombre) => {
      return nombre.nombre;
    });

    let arrayId = productoEncontrado.map((id) => {
      return id.id;
    });
    console.log(arrayNombre.includes(req.body.nombre));
    let idProducto = arrayId.pop();

    if (arrayNombre.includes(req.body.nombre)) {
      await db.productoTalle.create({
        idProducto: ProductoNombre.id,
        idTalle: req.body.talle,
      });

      await db.productoGenero.create({
        idProducto: ProductoNombre.id,
        idGenero: req.body.genero,
      });
    } else {
      await db.Producto.create({
        nombre: req.body.nombre,
        idCategoria: req.body.genero,
        precio: req.body.precio,
        imagen: req.file.filename,
      }),
        await db.productoTalle.create({
          idProducto: idProducto + 1,
          idTalle: req.body.talle,
        });

      await db.productoGenero.create({
        idProducto: idProducto + 1,
        idGenero: req.body.genero,
      });
    }
    res.redirect("/productosporcategoria");
  },

  editar: function (req, res) {
    console.log(req.body.imagen);
    let productos = db.Producto.findByPk(req.params.id);
    let categorias = db.Categoria.findAll();
    let talles = db.Talle.findAll();
    let generos = db.Genero.findAll();

    Promise.all([productos, categorias, talles, generos]).then(
      ([producto, categoria, talle, genero]) => {
        res.render("./products/editarProducto.ejs", {
          producto,
          categoria,
          talle,
          genero,
        });
      }
    );
  },

  editarProducto: async function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      let producto = await db.Producto.findByPk(req.params.id);
      let categoria = await db.Categoria.findAll();
      let talle = await db.Talle.findAll();
      let genero = await db.Genero.findAll();

      return res.render("./products/editarProducto.ejs", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        producto,
        categoria,
        talle,
        genero,
      });
    }

    if (req.body.imagen) {
      await db.Producto.update(
        {
          nombre: req.body.nombre,
          idCategoria: req.body.genero,
          precio: req.body.precio,
          imagen: req.files[0].filename,
        },
        { where: { id: req.params.id } }
      );
    } else {
      await db.Producto.update(
        {
          nombre: req.body.nombre,
          idCategoria: req.body.genero,
          precio: req.body.precio,
        },
        { where: { id: req.params.id } }
      );
    }
    res.redirect("/productosporcategoria");
  },

  eliminarProducto: function (req, res) {
    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
  },

  //API Total Productos
  
  totalProductosApi: async function (req, res) {
    let totalP = await db.Producto.findAll({
      include: [{association: "categoria"}, {association: "talles"}],
    }); 

    let categorias = await db.Categoria.findAll()
    
    let remerasId = await db.Producto.findAll({
      where: { idCategoria: "1" },
    });
    let shortsId = await db.Producto.findAll({
      where: { idCategoria: "2" },
    });
    let calzadosId = await db.Producto.findAll({
      where: { idCategoria: "3" },
    });
    let vestidosId = await db.Producto.findAll({
      where: { idCategoria: "4" },
    });
    let camisasId = await db.Producto.findAll({
      where: { idCategoria: "5" },
    });
    let pantalonesId = await db.Producto.findAll({
      where: { idCategoria: "6" },
    });
    
    const countByCategory = {
      remeras: remerasId.length,
      shorts: shortsId.length,
      calzados: calzadosId.length,
      vestidos: vestidosId.length,
      camisas: camisasId.length,
      pantalones: pantalonesId.length,
    }

const productsMapped = totalP.map(valor => ({
  id: valor.id,
  name: valor.nombre,
  description:"No description",
  categoria: valor.categoria.nombre,
  detail: "/api/product/"+ valor.id,
  talles: valor.talles.map(talle => (talle.nombre))
}))

return res.status(200).json({
      total: totalP.length,
      totalCategorias: categorias.length,
      countByCategory,
      products: productsMapped,
      status: 200,
    });
  },

  // API Productos por ID
  
  productoIdApi: async function (req, res) {
    let producto = await db.Producto.findByPk(req.params.id, {
      include: [{association: "categoria"}, {association: "talles"}, {association: "generos"}]
    })
   
    let talle = producto.talles.map(valor => valor.nombre)
    let genero = producto.generos.map(valor => valor.nombre)
    
    return res.status(200).json({
     
        id: producto.id,
        nombre: producto.nombre,
        categoria: producto.categoria.nombre,
        talle: talle[0],
        genero: genero[0],
        estado: producto.estado,
        precio: producto.precio,
        imagen: "http://localhost:3032/images/productosporcategoria/"+producto.imagen,
      
      status: 200,
    });
  },
};

module.exports = productosController;
