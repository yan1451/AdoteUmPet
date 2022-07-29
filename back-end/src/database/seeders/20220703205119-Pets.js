'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pets',
      [{
        id: 1,
        name: 'bilu',
        history: 'xxx - xxxx- xxxx',
        picture: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-domesticated-dog.jpg?w=710&h=474',
      },
      {
        id: 2,
        name: 'zezinho',
        history: 'xxx - xxxx- xxxx',
        picture: 'https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg',
      }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
