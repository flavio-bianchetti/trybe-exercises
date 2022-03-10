module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Books',
      [
        { name: 'Livro 1', release_year: 2017, number_pages: 149 },
        { name: 'Livro 2', release_year: 2015, number_pages: 98 },
        { name: 'Livro 3', release_year: 2010, number_pages: 216 },
        { name: 'Livro 4', release_year: 2019, number_pages: 151 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
