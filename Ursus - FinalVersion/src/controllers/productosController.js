const fs = require ('fs');
const path = require ('path');
let productosCategorias = fs.readFileSync(path.resolve(__dirname, '../data/productosCategorias.json'), {encoding: 'utf-8'}); // requiero el modelo

productosCategorias = JSON.parse(productosCategorias); //parseo

let productosController = {
    listado: function(){},
    crear: function(){},
    categorias: function(req,res) {
        res.render('./products/categorias')
    },
    categoriasProductos: function(req,res) {
        res.render('./products/productosporcategoria.ejs',{productosCategorias: productosCategorias})
    },
    detalleProducto: function(req,res){
        let articulo = productosCategorias.find(articulo => articulo.id == req.params.id)
        res.render('./products/detalle-producto.ejs', {articulo: articulo})
    },
    shoppingCart: function(req,res) {
        res.render('./products/shopping-cart.ejs')
    },
    crearProducto: function(req,res) {
        res.render('./products/crearproducto.ejs')
    },
    editarProducto: function(req,res) {
        let productoDetalle = productosCategorias.find(productoDetalle => productoDetalle.id == req.params.id)
        console.log(productoDetalle)
        res.render('./products/editarproducto.ejs', {productoDetalle: productoDetalle})
    }
}


module.exports = productosController;