##Sobre este exercício:

Utilizar uma técnica de desenvolvimento de software chamada de refactoring que consiste em alterar um pedaço de código que já existe e deixá-lo melhor.

Query para criar o banco e a tabela:

---

DROP DATABASE IF EXISTS rest_exercicios;
CREATE DATABASE IF NOT EXISTS rest_exercicios;
USE rest_exercicios;

CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL
);

INSERT INTO products (name, brand)
VALUES ('Cerveja Skol', 'Ambev'),
       ('Monitor AGON', 'AOC'),
       ('MacBook Air', 'Apple');
SELECT * FROM products;

---

**OBS**: O arquivo .env deverá ser preenchido com:

PORT= número da porta utilizada pela aplicação. Ex.: 3000
MYSQL_HOST= endereço onde está localizado o banco de dados. Ex.: localhost
MYSQL_DB_NAME=rest_exercicios
USER_NAME= nome do usuário do banco de dados.
PASSWORD= senha do banco de dados.
