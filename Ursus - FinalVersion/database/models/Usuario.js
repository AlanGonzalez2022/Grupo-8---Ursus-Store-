module.exports = function (sequelize, dataTypes) {
  let alias = "Usuario";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: dataTypes.STRING,
      allowNull: false
    },
    email:{
      type: dataTypes.STRING,
      allowNull: false
    },
    password:{
      type: dataTypes.STRING,
      allowNull: false
    },
    imagenUser:{
      type: dataTypes.STRING,
      allowNull: false
    },
    idTipoUsuario:{
      type: dataTypes.INTEGER,
      allowNull: false
    }
  }

  let config = {
    tableName: "usuarios",
    timestamps: false
  }

  let Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.belongsTo(models.tipoUsuario, {
      as: "tipoUsuario",
      foreignKey: "idTipoUsuario"
    })
  
    Usuario.belongsToMany(models.Producto, {
      as: "productos",
      through: "carrito",
      foreignKey: "idUsuario",
      otherKey: "idProducto",
      timestamps: false
    }) 
  
  }

  
  return Usuario;

}