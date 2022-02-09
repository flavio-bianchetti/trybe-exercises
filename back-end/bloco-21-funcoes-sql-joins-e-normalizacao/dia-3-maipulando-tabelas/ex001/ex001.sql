--Exercício 1: Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

--* Nome;

--* Espécie;

--* Sexo;

--* Idade;

--* Localização.

--Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
--Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

DROP DATABASE IF EXISTS Zoo;

CREATE DATABASE Zoo;

CREATE TABLE Zoo.ANIMAL(
    id INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo CHAR NOT NULL,
    idade INT NOT NULL DEFAULT 0,
    localizacao VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
) engine = InnoDB;

CREATE TABLE Zoo.CARGO(
    id INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
) engine = InnoDB;

CREATE TABLE Zoo.FUNCIONARIO(
    id INTEGER NOT NULL AUTO_INCREMENT,
    cargo_id INTEGER NOT NULL,
    nome VARCHAR(50) NOT NULL,
    superior_id INTEGER NULL DEFAULT NULL,    
    PRIMARY KEY(id),
    FOREIGN KEY (cargo_id) REFERENCES CARGO (id)
) engine = InnoDB;

CREATE TABLE Zoo.ANIMAL_FUNCIONARIO(
    animal_id INTEGER NOT NULL,
    funcionario_id INTEGER NOT NULL,
    PRIMARY KEY(animal_id, funcionario_id),
    FOREIGN KEY (animal_id) REFERENCES ANIMAL (id),
    FOREIGN KEY (funcionario_id) REFERENCES FUNCIONARIO (id)
) engine = InnoDB;

