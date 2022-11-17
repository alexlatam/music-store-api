const { Model, DataTypes, Sequelize } = require('sequelize')

// el nombre que tendra la tabla
const USER_TABLE = 'users';

// Definimos la estrucutra que tendra la tabla 'users'
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
}

// creamos el modelo User que extiende de la clase Model de sequelize
class User extends Model {
  static associate(){
    // relations with other models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }