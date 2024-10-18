'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      username: {
        allowNull:false,
        type:Sequelize.STRING(100)
      },
      fullname: {
        allowNull:false,
        type:Sequelize.STRING(100)
      },
      password: {
        allowNull:false,
        type:Sequelize.STRING(255)
      },
      type: {
          type: Sequelize.STRING(1),
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("user");
  }
};
