'use strict';
const { STRING, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Pets = sequelize.define('pets', {

    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: STRING,

    history: STRING,

    picture: STRING
  }, {
    undescored: true,
    sequelize,
    timestamps: false,
  });

  return Pets;
};
