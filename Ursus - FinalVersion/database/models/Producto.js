const { BOOLEAN } = require("sequelize");

module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
      allowNull: false
    },
    idCategoria: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: dataTypes.STRING,
      allowNull: false,
      defaultValue: "Disponible"
    },
    precio: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    imagen: {
      type: dataTypes.STRING,
      allowNull: false
    },
  }

  let config = {
    tableName: "productos",
    timestamps: false
  }

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Categoria, {
      as: "categoria",
      foreignKey: "idCategoria"
    })

    Producto.belongsToMany(models.Usuario, {
      as: "usuarios",
      through: "carrito",
      foreignKey: "idProducto",
      otherKey: "idUsuario",
      timestamps: false
    })
    
    Producto.belongsToMany(models.Talle, {
      as: "talles",
      through: "productos_talles",
      foreignKey: "idProducto",
      otherKey: "idTalle",
      timestamps: false
    })
  
    Producto.belongsToMany(models.Genero, {
      as: "generos",
      through: "productos_generos",
      foreignKey: "idProducto",
      otherKey: "idGenero",
      timestamps: false
    })
  }

  return Producto;

}

