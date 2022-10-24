let mainController = {
    index (req, res) {
        res.render('./products/index')
    },
    login: function(req,res) {
        res.render('users/login')
    },
    register: function(req,res) {
        res.render('users/register')
    }
}

module.exports = mainController;