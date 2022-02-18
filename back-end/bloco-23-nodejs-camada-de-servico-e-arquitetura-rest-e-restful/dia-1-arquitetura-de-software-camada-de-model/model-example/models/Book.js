const { json } = require('body-parser');
const connection = require('./connection');
const Author = require('./Author');

const serialize = (bookData) => ({
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
});

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT id, title, author_id FROM model_example.books;',
    );
    return books.map(serialize);
};

const findBooksByAuthorId = async (authorId) => {
    const books = await connection.execute(
        'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;',
        [authorId]
    );

    if (books.length === 0) return null;

    return books.map(serialize);
};

const verifyTitle =  (title) => {
    if (!title || typeof title !== 'string' || title.length < 3) return false;
    return true;
};

const existsAuthorId = async (authorId) => {
    if (
        !authorId
        || typeof authorId !== 'number'
        || !(await Author.findAuthorById(authorId))
    ) return false;
    return true;
};

const add = async (title, authorId) => {
    if (!verifyTitle(title) || !existsAuthorId(authorId)) return null;
    const isSucess = await connection.execute(
        'INSERT INTO model_example.books (title, author_id) VALUES (?,?);',
        [title, authorId]
    );
    return {id: isSucess.insertId, title, authorId};
};

module.exports = {
    getAll,
    findBooksByAuthorId,
    add,
};
