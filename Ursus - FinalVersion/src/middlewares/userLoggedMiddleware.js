const User = require("../models/Users")

function userLoggedMiddleware(req, res, next){
    res.locals.logged = false

    let cookieLogged = req.cookies.cookieUser;
    let cookieFoundUser = User.findByField("email", cookieLogged)

    if(cookieFoundUser){
        req.session.userLogged = cookieFoundUser
    }
    
    if(req.session && req.session.userLogged){
        res.locals.logged = true
        res.locals.userLogged = req.session.userLogged
    }
  
    next()
}

module.exports = userLoggedMiddleware