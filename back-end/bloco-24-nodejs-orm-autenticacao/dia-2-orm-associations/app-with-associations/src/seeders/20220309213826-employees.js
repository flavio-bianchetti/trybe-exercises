module.exports = {
  up: async (queryInterface, _Sequelize) =>  {
    return queryInterface.bulkInsert('Employees',
      [
        {
          first_name: 'Antônio',
          last_name: 'Carlos',
          age: 50,
        },
        {
          first_name: 'Marcos',
          last_name: 'Silva',
          age: 22,
        },
        {
          first_name: 'Janaína',
          last_name: 'Roman',
          age: 29,
        },
        {
          first_name: 'Laura',
          last_name: 'Santos',
          age: 34,
        }
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};
