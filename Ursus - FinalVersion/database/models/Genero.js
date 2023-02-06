module.exports = function (sequelize, dataTypes) {
  let alias = "Genero";

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
    tableName: "generos",
    timestamps: false
  }

  let Genero = sequelize.define(alias, cols, config);

  Genero.associate = function (models) {
    
    Genero.belongsToMany(models.Producto, {
      as: "productosG",
      through: "productos_generos",
      foreignKey: "idGenero",
      otherKey: "idProducto",
      timestamps: false
    })
   
  }

  return Genero;

}