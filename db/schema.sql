CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
	id INTEGER NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	burger_name VARCHAR(100),
	devoured BOOLEAN,
	date TIMESTAMP);

