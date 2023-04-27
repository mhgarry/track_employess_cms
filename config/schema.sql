DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE departments (
	id INT NOT NULL PRIMARY KEY,
	name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
	id INT NOT NULL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	salary DECIMAL NOT NULL,
	department_id INT NOT NULL,
	FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
	FOREIGN KEY (role_id) REFERENCES roles(id)
)
