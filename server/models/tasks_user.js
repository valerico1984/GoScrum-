'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tasks_user.init({
    task_id: DataTypes.INTEGER,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tasks_user',
  });
  return tasks_user;
};