'use strict';

const faker = require('faker');

const users = Array.from({ length: 150 }, () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      users,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
