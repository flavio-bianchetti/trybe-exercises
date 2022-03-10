module.exports = (sequelize, _DataTypes) => {
  const UsersBook = sequelize.define('UsersBook',
    {},
    { timestamps: false },
  );

  UsersBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UsersBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UsersBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UsersBook;
};
