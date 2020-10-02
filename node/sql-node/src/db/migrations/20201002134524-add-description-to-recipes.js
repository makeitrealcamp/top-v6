'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'recipes',
        'description',
        {
          type: Sequelize.DataTypes.STRING
        },
        { transaction: t }
      )
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn(
          'recipes',
          'description',
          { transaction: t }
        )
      ])
    })
  }
};
