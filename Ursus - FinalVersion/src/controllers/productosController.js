const fs = require ('fs');
const path = require ('path');

const productosCategoriasPath = path.join(__dirname, '../data/productosCategorias.json'); // requiero el modelo
const productosCategorias = JSON.parse(fs.readFileSync(productosCategoriasPath, "utf-8")); //parseo

let productosController = {
    listado: function(){},
    crear: function(){},
    categorias: function(req,res) {
        res.render('./products/categorias')
    },
    //Categorías Productos nos muestra en nuestro proyecto el LISTADO de PRODUCTOS POR CATEGORÍA
    
    categoriasProductos: function(req,res) {
        res.render('./products/productosporcategoria.ejs',{productosCategorias})
    },
    detalleProducto: function(req,res){
        let paramsId = req.params.id
        let articulos = productosCategorias.find(articulo => articulo.id == paramsId)
        res.render('./products/detalle-producto.ejs', {articulos})
    },
    
    shoppingCart: function(req,res) {
        res.render('./products/shopping-cart.ejs')
    },

    crear: function(req,res){
        res.render('./products/crearProducto.ejs')
    },

    crearProducto: function(req,res) {
    
        // let imagen
        // console.log(req.files);
        // if(req.files != undefined){
        //     imagen = req.files.filename
        // } else {
        //     imagen = 'default-image.png'
        // }

        let newProduct = {
            id: Date.now(),
            imagen: req.file.fieldname,
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            genero: req.body.genero,
            color:req.body.color,
            precio: Number(req.body.precio),
            talle: req.body.talle,
            cantidad: req.body.cantidad,
            disponible: Boolean(req.body.disponible)
        }
        productosCategorias.push(newProduct);
        fs.writeFileSync(productosCategoriasPath, JSON.stringify(productosCategorias, null, ' '));

        res.redirect('/productosporcategoria')
    },

    editar:  function(req,res){
        let paramsId = req.params.id;
        let productoEdicion = productosCategorias.find(producto => producto.id == paramsId)
        console.log(productoEdicion)
        res.render('./products/editarProducto.ejs', {productoEdicion} );
    },

    editarProducto: function(req, res) {
        let paramsId = req.params.id
        let productoDetalle = productosCategorias.find(producto => producto.id == paramsId)
        
        if(productoDetalle.id == paramsId){
        
            productoDetalle.id = Number(req.params.id)
            productoDetalle.nombre = req.body.nombre
            productoDetalle.categoria = req.body.categoria
            productoDetalle.genero = req.body.genero
            productoDetalle.color = req.body.color
            productoDetalle.precio = Number(req.body.precio)
            productoDetalle.talle = req.body.talle
            productoDetalle.cantidad = Number(req.body.cantidad)
            productoDetalle.disponible = Boolean(req.body.disponible)   
        }
        console.log(productoDetalle)
        fs.writeFileSync(productosCategoriasPath, JSON.stringify(productosCategorias, null, " "))
        
        res.render("./products/detalle-producto.ejs",{articulos:productoDetalle});
    },

    eliminarProducto: function(req,res) {
        let paramsId = req.params.id;
        let productoEliminado = productosCategorias.filter(producto => producto.id != paramsId)
        
    
        fs.writeFileSync(productosCategoriasPath, JSON.stringify(productoEliminado, null, " "))
    
        res.render('./products/productosPorCategoria.ejs', {productosCategorias: productoEliminado});
    },
}


module.exports = productosController;