'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
  userName: 'john',
  email: 'john@gmail.com',
  password: '123admin',
  createdAt: new Date(),
  updatedAt: new Date()
}]);
},

  down: (queryInterface, Sequelize)=> {
    return queryInterface.bulkDelete('Users', null, {});
  }
};