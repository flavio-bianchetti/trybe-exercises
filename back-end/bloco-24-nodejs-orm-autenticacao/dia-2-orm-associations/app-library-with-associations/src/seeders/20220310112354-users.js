module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          first_name: 'Carlos',
          last_name: 'Dantes',
          age: 30,
        },
        {
          first_name: 'Marcos',
          last_name: 'Mineiro',
          age: 18,
        },
        {
          first_name: 'Silvia',
          last_name: 'Xavier',
          age: 23,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};