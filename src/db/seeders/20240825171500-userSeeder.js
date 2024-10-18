'use strict';

/** @type {import('sequelize-cli').Migration} */
const {hashPassword}=require('../../thirdparty/hashPassword')
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [
      {
        username: 'admin',
        fullname: 'administrator',
        password:await hashPassword('12345'),
        type:'A'        
      },
      {
        username: 'user_1',
        fullname: 'user one',
        password:await hashPassword('12345'),
        type:'A'        
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
