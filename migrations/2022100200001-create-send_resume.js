'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resume', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING  
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      filename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      feedback: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('resume');
  }
};