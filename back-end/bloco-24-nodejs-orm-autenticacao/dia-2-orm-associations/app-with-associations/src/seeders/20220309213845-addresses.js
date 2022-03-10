module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Barbacena',
          street: 'Avenida Bias Fortes',
          number: 753,
          employee_id: 1,
        },
        {
          city: 'Santos Dumont',
          street: 'Rua do Triunfo',
          number: 7,
          employee_id: 2,
        },
        {
          city: 'Santa Catarina',
          street: 'Avenida Rio Branco',
          number: 888,
          employee_id: 3,
        },
        {
          city: 'Manaus',
          street: 'Rua Xavante',
          number: 525,
          employee_id: 4,
        },
        {
          city: 'Olinda',
          street: 'Rua das Flores',
          number: 90,
          employee_id: 4,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};