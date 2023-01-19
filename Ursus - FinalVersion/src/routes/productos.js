let express = require('express');
let productosController = require ('../controllers/productosController');
const path = require ('path');
const router = express.Router();

//Middleware
const authMiddleware = require("../middlewares/authMiddleware");
const validationsCreate = require("../middlewares/validationProductMiddleware");
const validationsUpdate = require("../middlewares/validationPUpdateMiddleware")
// **** Controller Require ****
const multer = require ('multer');
const { diskStorage } = require('multer');
const { buscador } = require('../controllers/productosController');

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
router.get("/buscar",productosController.buscar)

//Creación de producto:
router.get('/crearProducto',productosController.crear);
router.post('/crearProducto',upload.single("imagen"),validationsCreate, productosController.crearProducto);

//Edición de producto:
router.get('/editar/:id', productosController.editar);
router.post('/editar/:id',upload.single("imagen"),validationsUpdate, productosController.editarProducto);

//Eliminación de producto:
router.delete('/eliminarProducto/:id', productosController.eliminarProducto);

module.exports = router;