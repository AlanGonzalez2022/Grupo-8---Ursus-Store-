module.exports = function (sequelize, dataTypes) {
  let alias = "Carrito";

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
    idUsuario: {
      type: dataTypes.INTEGER,
      allowNull: false 
    }
  }

  let config = {
    tableName: "carrito",
    timestamps: false
  }

  let Carrito = sequelize.define(alias, cols, config);
  
  return Carrito;

}