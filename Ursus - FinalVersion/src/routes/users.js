let express = require("express");
let usersController = require("../controllers/usersController");
const path = require("path");
const router = express.Router();

//Middlewares
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validationMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//Registro de usuarios
router.get("/register", guestMiddleware, usersController.register);
router.get("/emailUsuario", usersController.emailFound);
router.post(
  "/register",
  uploadFile.single("imagenUser"),
  validations,
  usersController.processRegister
);

//Login de usuarios
router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.processLogin);

//Profile de usuario
router.get("/profile", authMiddleware, usersController.profile);
router.get("/logout", usersController.logout);
router.get("/editProfile/:id", usersController.editProfile);
router.post(
  "/editProfile/:id",
  uploadFile.single("imagenUser"),
  usersController.confirmEdit
);

//Admin
router.get("/admin", usersController.admin);
router.post("/admin", usersController.processAdmin);

//API Usuarios

router.get("/api/users", guestMiddleware, usersController.totalUsuariosApi);
router.get("/api/users/:id", guestMiddleware, usersController.usuarioIdApi);

module.exports = router;
