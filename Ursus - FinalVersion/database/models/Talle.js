module.exports = function (sequelize, dataTypes) {
  let alias = "Talle";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }

  let config = {
    tableName: "talles",
    timestamps: false
  }

  let Talle = sequelize.define(alias, cols, config);

  Talle.associate = function (models){
    
    Talle.belongsToMany(models.Producto, {
      as: "productosT",
      through: "productos_talle",
      foreignKey: "idTalle",
      otherKey: "idProducto",
      timestamps: false
    })
  
  }

  return Talle;

}