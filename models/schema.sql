DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL, 
    fname VARCHAR (50) NOT NULL, 
    lname VARCHAR (50) NOT NULL, 
    createdAt TIMESTAMP NOT NULL, 
    primary key(user_id)
)
