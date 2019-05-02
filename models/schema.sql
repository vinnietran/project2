DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

/* Production Schema*/
CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL, 
    fname VARCHAR (50) NOT NULL, 
    lname VARCHAR (50) NOT NULL, 
    createdAt TIMESTAMP NOT NULL, 
    primary key(user_id)
)

CREATE TABLE job_posts (
	job_id INT AUTO_INCREMENT NOT NULL,    
    posted_by INT NOT NULL, 
    accepted_by INT NOT NULL, 
    job_title VARCHAR (250) NOT NULL, 
    job_description VARCHAR (500) NOT NULL, 
    location VARCHAR (50) NOT NULL, 
	createdAt TIMESTAMP NOT NULL, 
    foreign key (posted_by)
     REFERENCES users(user_id)
     ON DELETE CASCADE
     ON UPDATE CASCADE,
	foreign key (accepted_by)
     REFERENCES users(user_id)
     ON DELETE CASCADE
     ON UPDATE CASCADE,
    primary key(job_id)
)