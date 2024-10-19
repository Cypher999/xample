'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  session.init({
    id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    user_id: {
      type:DataTypes.INTEGER,
    },
    ip: {
      type:DataTypes.STRING(16),
    },
    user_agent: {
      type:DataTypes.STRING(100),
    },
    date_created: {
      type:DataTypes.DATE,
    }
  }, {
    sequelize,
    freezeTableName: true,
    timestamps:false,
    modelName: 'session',
  });
  return session;
};