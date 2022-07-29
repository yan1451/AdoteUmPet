'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('adocaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
      },
      pet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pets',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('adocaos');
  }
};