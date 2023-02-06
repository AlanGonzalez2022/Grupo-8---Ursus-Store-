const db = require("../../database/models")

const mainController = {
  index: function (req, res) {
    res.render("./products/index")
  },

    vision: function (req, res) {
      res.render("./products/vision")
    },

    quienes: function (req, res) {
      res.render("./products/quienes")
    }
}

module.exports = mainController;