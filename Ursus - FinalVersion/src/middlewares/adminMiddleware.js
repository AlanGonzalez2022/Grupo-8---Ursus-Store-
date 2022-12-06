const User = require("../models/Users")

function adminMiddleware(req, res, next){
    res.locals.logged = false
    
    if(req.session && req.session.admin){
        res.locals.logged = true
        res.locals.admin = req.session.admin
    }
  
    next()
}

module.exports = adminMiddleware