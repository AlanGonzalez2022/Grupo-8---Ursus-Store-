module.exports = function (sequelize, dataTypes) {
  let alias = "productoGenero";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProducto: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    idGenero: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  }

  let config = {
    tableName: "productos_generos",
    timestamps: false
  }

  let productoGenero = sequelize.define(alias, cols, config);

  

  return productoGenero;

}