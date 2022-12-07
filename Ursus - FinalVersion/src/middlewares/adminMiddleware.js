// const User = require("../models/Users")

// function adminMiddleware(req, res, next){
//     res.locals.loggedAdmin = false
    
//     if(req.session && req.session.userLogged){
//         res.locals.loggedAdmin = true
//         res.locals.admin = req.session.admin
//     }
  
//     next()
// }

// module.exports = adminMiddleware