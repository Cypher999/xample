'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
        // user.hasMany(models.ebook,{foreignKey:'user_id',onDelete:'cascade',onUpdate:'cascade',hooks:true})
        // user.hasOne(models.staff,{foreignKey:'user_id',onDelete:'cascade',onUpdate:'cascade',hooks:true})       
    }
  }
  user.init({
    id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },    
    username: {
      allowNull:false,
      type:DataTypes.STRING(100)
    },
    fullname: {
      allowNull:false,
      type:DataTypes.STRING(100)
    },
    password: {
      allowNull:true,
      type:DataTypes.STRING(255)
    },
    img: {
      type:DataTypes.STRING(70)
    },
    type: {
        type: DataTypes.STRING(1),
    }
  }, {
    sequelize,
    freezeTableName: true,
    timestamps:false,
    modelName: 'user',
  });
  user.addHook('beforeDestroy','user_beforeDestroy',(user)=>{    
    if(__existSync('files/images/user/'+user.dataValues.img+".jpg")){
      __unlinkSync('files/images/user/'+user.dataValues.img+".jpg");
    }
  });
  return user;
};