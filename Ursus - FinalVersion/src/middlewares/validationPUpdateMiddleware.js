const path = require("path");
const { check } = require("express-validator")

module.exports = [
	check("nombre")
		.notEmpty().withMessage("Tienes que colocar un nombre del producto").bail()
		.isLength({ min: 5 }).withMessage("El producto debe de tener como mínimo 5 caracteres"),
	check("precio")
		.notEmpty().withMessage("Tienes que colocar un precio"),
	check("imagen").custom((value, { req }) => {
		let file = req.file;
		let extencionesPermitidas = [".jpg", ".png", ".jpeg", "gif"]
		if (file) {
			let ExtensionImg = path.extname(file.originalname)
			if (!extencionesPermitidas.includes(ExtensionImg)) {
				throw new Error(`Las extensiones permitidas son ${extencionesPermitidas.join(", ")}`)
			}
		}

		return true;
	})
]