const db = require("../../database/models")

let mainController = {
  index: function (req, res) {
    res.render("./products/index")
  }
}

module.exports = mainController;