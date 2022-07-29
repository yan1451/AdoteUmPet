'use strict';
const { STRING, NUMBER, DECIMAL, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Adocaos = sequelize.define('adocaos', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    email: STRING,

    value: STRING,

    pet_id: DECIMAL,
  }, {
    undescored: true,
    sequelize,
    timestamps: false,
  });

  Adocaos.associate = (models) => {
    Adocaos.belongsTo(models.pets, { foreignKey: 'pet_id', as: 'pets' });
  };

  return Adocaos;
};