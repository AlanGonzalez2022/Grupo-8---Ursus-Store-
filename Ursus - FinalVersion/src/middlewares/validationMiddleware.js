const path = require("path");
const { check } = require("express-validator")


module.exports = [
    check("usuario").notEmpty().withMessage("Tienes que colocar un nombre de usuario"),
    check("email")
       .notEmpty().withMessage("Tienes que colocar un Mail").bail()
       .isEmail().withMessage("El Mail debe de ser válido"),
    check("password").notEmpty().withMessage("Debes colocar un password"),
    check("imagenUser").custom((value, { req }) => {
       let file = req.file;
       let extencionesPermitidas = [".jpg", ".png", ".jpeg"]
       
       if(!file){
          throw new Error('Tienes que subir una foto de perfil');
       } else{
          let ExtensionImg = path.extname(file.originalname)
          if(!extencionesPermitidas.includes(ExtensionImg)){
             throw new Error(`Las extensiones permitidas son ${extencionesPermitidas.join(", ")}`)
          }
       }
       return true;
    })  
 ]