'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define('appointment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: DataTypes.DATEONLY,      // Campo de data
    startTime: DataTypes.TIME,     // Campo de hora de início
    endTime: DataTypes.TIME        // Campo de hora de fim
  }, {
    tableName: "appointments"
  });
  return appointment;
};