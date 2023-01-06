module.exports = function (sequelize, dataTypes) {
  let alias = "tipoUsuario";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }

  let config = {
    tableName: "tipo_usuarios",
    timestamps: false
  }

  let tipoUsuario = sequelize.define(alias, cols, config);

  tipoUsuario.associate = function (models){
    tipoUsuario.hasMany(models.Usuario, {
          as: "usuarios",
          foreignKey: "idTipoUsuario"
    })
  }
  
  return tipoUsuario;

}