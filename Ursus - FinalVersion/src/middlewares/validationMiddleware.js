const path = require("path");
const { check } = require("express-validator")


module.exports = [
  check("usuario")
    .notEmpty().withMessage("Tienes que colocar un nombre de usuario")
    .isLength({ min: 2 }).withMessage("Su usuario debe de tener como mínimo 2 caracteres"),
  check("email")
    .notEmpty().withMessage("Tienes que colocar un Mail").bail()
    .isEmail().withMessage("El Mail debe de ser válido"),
  check("password")
    .notEmpty().withMessage("Debes colocar un password")
    .isLength({ min: 8 }).withMessage("Su contraseña no conicide"),
  check("repassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Los passwords no coinciden');
    }
    return true
  }),
  check("imagenUser").custom((value, { req }) => {
    let file = req.file;
    let extencionesPermitidas = [".jpg", ".png", ".jpeg"]

    if (!file) {
      throw new Error('Tienes que subir una foto de perfil');
    } else {
      let ExtensionImg = path.extname(file.originalname)
      if (!extencionesPermitidas.includes(ExtensionImg)) {
        throw new Error(`Las extensiones permitidas son ${extencionesPermitidas.join(", ")}`)
      }
    }
    return true;
  })
]