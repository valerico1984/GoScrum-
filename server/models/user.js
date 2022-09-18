'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      primaryKey: true,
      autoIncrement:true,
      allowNull: false,
      type: DataTypes.INTEGER },

    username: {
      allowNull: false,
      type: DataTypes.STRING},
    
    
      password: {
        allowNull: false,
        type: DataTypes.CHAR}
        ,
    email: {
      allowNull: false,
      type: DataTypes.STRING},
      rol: {
        allowNull: true,
        type: DataTypes.STRING
      },


  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};