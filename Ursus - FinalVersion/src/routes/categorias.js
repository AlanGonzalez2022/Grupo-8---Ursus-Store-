let express = require('express');
let productosController = require ('../controllers/productosController');
const router = express.Router();

router.get('/categorias', productosController.categorias);
router.get('/productosporcategoria', productosController.categoriasProductos);
router.get('/categorias/detalle-producto/:id', productosController.detalleProducto);
router.get('/shopping-cart', productosController.shoppingCart);
router.get('/crearproducto', productosController.crearProducto);
router.get('/editarproducto', productosController.editarProducto);

module.exports = router;