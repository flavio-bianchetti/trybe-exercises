##Sobre este exercício:

Desenvolver uma aplicação de busca de CEP chamada cep-lookup . A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, ao invés de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.
Query para criar o banco e a tabela:

---

CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);

---

**OBS**: O arquivo .env deverá ser preenchido com:

PORT= número da porta utilizada pela aplicação. Ex.: 3000
MYSQL_HOST= endereço onde está localizado o banco de dados. Ex.: localhost
MYSQL_DB_NAME=cep_lookup
MYSQL_TABLE_NAME=ceps
USER_NAME= nome do usuário do banco de dados.
PASSWORD= senha do banco de dados.
