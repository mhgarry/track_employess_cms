USE employee_tracker;

INSERT INTO department (name)
Values ('Human REsources'), ('Engineering'), ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 80000, 1), ('Sales Associate', 50000, 2), ('HR Manager', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jake', 'Statefarm', 1, null). ('Mike', 'Fryguy', 2, 1) ('Lena', 'Pena', 3, 1)
