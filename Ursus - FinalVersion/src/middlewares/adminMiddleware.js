function adminMiddleware(req, res, next) {
    if(req.session.userLogged.idTipoUsuario == 2 ){
        return res.redirect("/");

    }
    
    next()
}

module.exports = adminMiddleware