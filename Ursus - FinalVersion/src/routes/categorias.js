let express = require('express');
let productosController = require ('../controllers/productosController');
const path = require ('path');
const router = express.Router();

// **** Controller Require ****
const multer = require ('multer');
const { diskStorage } = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');

// No nos muestra la imagen, debido a que en el nombre de nuestra imagen no tenemos la ruta en donde se encuentra nuestra imagen
// Es redireccionamiento 
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images/productosporcategoria'))
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

   const upload = multer({storage});

router.get('/categorias', productosController.categorias);
router.get('/productosporcategoria', productosController.categoriasProductos);
router.get('/categorias/detalle-producto/:id', productosController.detalleProducto);
router.get('/shopping-cart', authMiddleware, productosController.shoppingCart);

//Creación de producto:
router.get('/crearProducto',productosController.crear);
router.post('/crearProducto',upload.any(), productosController.crearProducto);

//Edición de producto:
router.get('/editar/:id', productosController.editar);
router.put('/editar/:id', productosController.editarProducto);

//Eliminación de producto:
router.delete('/eliminarProducto/:id', productosController.eliminarProducto);



module.exports = router;