const { check } = require("express-validator")


module.exports = [
    check("email")
       .notEmpty().withMessage("Tienes que colocar un Mail").bail()
       .isEmail().withMessage("El Mail debe de ser válido"), 
 ]

 
 
const {check} = require('express-validator');

const {check} = require('express-validator');

module.exports = [

   check('name')

       .notEmpty()

       .withMessage('Ingresar un nombre')

       .isLength({min: 2})

       .withMessage('El nombre debe tener mas de dos caracteres'),

   check('email')

       .notEmpty()

       .withMessage("Ingresar un email")

       .isEmail()

       .withMessage('Ingresar un email válido'),

   check('password')

       .isLength({min: 8})

       .withMessage('La constraseña deberia tener un minimo de 8 caracteres')

]

const {check} = require('express-validator');
.notEmpty()
.isLength({min: 2})