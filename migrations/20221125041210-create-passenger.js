'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('passenger', {
  id: {
    type: Sequelize.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  mlastname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  id_country: { 
    type: Sequelize.INTEGER,
    field: 'id_country',
    references: {
      model: Country,
      key: 'id'
    },}
  });
},
  

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('passenger');
  }
};
