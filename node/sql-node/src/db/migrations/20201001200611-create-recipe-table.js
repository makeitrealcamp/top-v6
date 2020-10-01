'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recipes', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.BIGINT
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        noEmpty: true
      },
      userId: Sequelize.DataTypes.BIGINT,
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recipes')
  }
};
