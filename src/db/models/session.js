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
      autoIncrement:true,
      primaryKey:true
    },
    ip: {
      type:DataTypes.STRING(16),
      autoIncrement:true,
      primaryKey:true
    },
    user_agent: {
      type:DataTypes.STRING(100),
      autoIncrement:true,
      primaryKey:true
    },
    date_created: {
      type:DataTypes.DATE,
      autoIncrement:true,
      primaryKey:true
    }
  }, {
    sequelize,
    freezeTableName: true,
    timestamps:false,
    modelName: 'session',
  });
  return session;
};