module.exports = function (sequelize, dataTypes) {
    let alias = "productoTalle";
  
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
      idTalle: {
        type: dataTypes.INTEGER,
        allowNull: false
      }
    }
  
    let config = {
      tableName: "productos_talles",
      timestamps: false
    }
  
    let productoTalle = sequelize.define(alias, cols, config);
  
    
  
    return productoTalle;
  
  }