'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('appointments', [
      {
        "date": new Date(),
        "startTime": "08:00:00", // Hora de início
        "endTime": "10:00:00",   // Hora de fim
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "date": new Date(),
        "startTime": "11:00:00", // Hora de início
        "endTime": "13:00:00",   // Hora de fim
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "date": new Date(),
        "startTime": "15:00:00", // Hora de início
        "endTime": "17:00:00",   // Hora de fim
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('appointments');
  }
};
