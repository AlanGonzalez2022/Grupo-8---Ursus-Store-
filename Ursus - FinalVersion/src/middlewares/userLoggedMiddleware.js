const { Association } = require("sequelize");
const db = require("../../database/models")

async function userLoggedMiddleware(req, res, next) {
  res.locals.logged = false

  let cookieLogged = req.cookies.cookieUser;

  if (cookieLogged) {
    let cookieFoundUser = await db.Usuario.findOne({
      include: [{ association: "tipoUsuario" }],
      where: { email: cookieLogged }
    });


    if (cookieFoundUser) {
      req.session.userLogged = cookieFoundUser
    }
  }
  
  if (req.session && req.session.userLogged) {
    res.locals.logged = true
    res.locals.userLogged = req.session.userLogged
  }

  next()
}

module.exports = userLoggedMiddleware