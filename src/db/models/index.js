'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
let config = require(__dirname + '/../../../config/config.json')[env];
const db = {};
config['dialectModule'] = require('mysql2');

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Manually import each model
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Session = require('./session')(sequelize, Sequelize.DataTypes);
// Add more models as needed

// Register models in the db object
db.User = User;
db.Session = Session;
// Add other models as needed

// Set up associations if applicable
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
