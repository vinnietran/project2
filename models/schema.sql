DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
use exampledb;

CREATE TABLE users (
 id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL, 
    email VARCHAR (100) NOT NULL, 
    password VARCHAR (100) NOT NULL, 
  PRIMARY KEY (id)
);
