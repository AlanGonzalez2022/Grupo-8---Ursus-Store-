let express = require("express");
let productosController = require("../controllers/productosController");
const path = require("path");
const router = express.Router();

//Middleware
const authMiddleware = require("../middlewares/authMiddleware");
const validationsCreate = require("../middlewares/validationProductMiddleware");
const validationsUpdate = require("../middlewares/validationPUpdateMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
// **** Controller Require ****
const multer = require("multer");
const { diskStorage } = require("multer");
const { buscador } = require("../controllers/productosController");

// No nos muestra la imagen, debido a que en el nombre de nuestra imagen no tenemos la ruta en donde se encuentra nuestra imagen
// Es redireccionamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/productosporcategoria"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.get("/categorias", productosController.categorias);
router.get(
  "/categorias/detalle-producto/:id",
  productosController.detalleProducto
);
router.get("/shopping-cart", authMiddleware, productosController.shoppingCart);
router.get("/buscar", productosController.buscar);
router.get('/costos', productosController.costos);

//Productos por Categoria

router.get("/productosporcategoria", productosController.categoriasProductos);
router.get("/camisas", productosController.Camisas);
router.get("/vestidos", productosController.Vestidos);
router.get("/shorts", productosController.Shorts);
router.get("/calzados", productosController.Calzados);
router.get("/pantalones", productosController.Pantalones);


//Creación de producto:
router.get(
  "/crearProducto",
  authMiddleware,
  adminMiddleware,
  productosController.crear
);
router.post(
  "/crearProducto",
  upload.single("imagen"),
  validationsCreate,
  productosController.crearProducto
);


//Edición de producto:
router.get(
  "/editar/:id",
  authMiddleware,
  adminMiddleware,
  productosController.editar
);
router.post(
  "/editar/:id",
  upload.single("imagen"),
  validationsUpdate,
  productosController.editarProducto
);

//Eliminación de producto:
router.delete("/eliminarProducto/:id", productosController.eliminarProducto);

// API Productos:

router.get("/api/products", productosController.totalProductosApi);
router.get("/api/products/:id", productosController.productoIdApi);

module.exports = router;
