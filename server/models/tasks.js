'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tasks.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER},

    user: {
      allowNull: false,
      type: DataTypes.STRING},

    description: {
      allowNull: true,
      type: DataTypes.TEXT},

    status: {
      allowNull: false,
      type: DataTypes.STRING},

    importance: {
      allowNull: false,
      type: DataTypes.STRING},
      
    title: {
      allowNull: false,
      type: DataTypes.STRING},
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};