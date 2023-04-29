// require mysql2
const mysql = require('mysql2');
// require inquirer
const inquirer = require('inquirer');
// require console.table
const cTable = require('console.table');
// require database connection
const connection = require('./connection');
// prompts user to pick a function to run a process within the application awaits the user to select a function to run
const promptUser = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        // prompt the user using inquirer to select a function to run within the application
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Update an employee manager',
          'View employees by department',
          'Delete a department',
          'Delete a role',
          'Delete an employee',
          'Exit',
        ],
      },
    ]);

    const { choices } = answers;
    // run the showDepartments function to display all departments
    switch (choices) {
      case 'View all departments':
        showDepartments();
        break;
        // run the showRoles function to display all roles
      case 'View all roles':
        showRoles();
        break;
        // run the showEmployees function to display all employees
      case 'View all employees':
        showEmployees();
        break;
        // run the addDepartment function to add a department
      case 'Add a department':
        addDepartment();
        break;
        // run the addRole function to add a role
      case 'Add a role':
        addRole();
        break;
        // run the addEmployee function to add an employee
      case 'Add an employee':
        addEmployee();
        break;
        // run the updateEmployee function to update an employee role
      case 'Update an employee role':
        updateEmployee();
        break;
        // run the updateManager function to update an employee manager
      case 'Update an employee manager':
        updateManager();
        break;
        // run the viewEmployeesByDepartment function to view employees by department
      case 'View employees by department':
        employeeDepartment();
        break;
        // run the deleteDepartment function to delete a department
      case 'Delete a department':
        deleteDepartment();
        break;
        // run the deleteRole function to delete a role
      case 'Delete a role':
        deleteRole();
        break;
        // run the deleteEmployee function to delete an employee
      case 'Delete an employee':
        deleteEmployee();
        break;
        // run the viewDepartmentBudgets function to view department budgets
      case 'View department budgets':
        viewBudget();
        break;
        // run the exit function to exit the application
      case 'Exit':
        connection.end();
        break;
      default:
        console.log('Invalid choice');
    }
  } catch (error) {
    console.log(error);
  }
};

// function to display all departments
const showDepartments = async () => {
  console.log('Showing all departments');
  const sql = `SELECT department.id AS id, department.name AS department FROM department`;
  try {
    const [rows, fields] = await connection.promise().query(sql);
    console.table(rows);
    promptUser();
  } catch (error) {
    console.log(error);
  }
};

// function to display all roles
const showRoles = async () => {
  console.log('Showing all roles');
  const sql = 'SELECT role.id AS id, role.title AS role FROM role';
  try {
    const [rows, fields] = await connection.promise().query(sql);
    console.table(rows);
    promptUser();
  } catch (error) {
    console.log(error);
  }
};

// function to display all employees
const showEmployees = async () => {
  console.log('Showing all employees');
  const sql = `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager 
        FROM employee e 
        LEFT JOIN role ON e.role_id = role.id 
        LEFT JOIN department ON role.department_id = department.id 
        LEFT JOIN employee m ON e.manager_id = m.id`;
  try {
    const [rows, fields] = await connection.promise().query(sql);
    console.table(rows);
    promptUser();
  } catch (error) {
    console.log(error);
  }
};

// function to add a department
const addDepartment = async () => {
  console.log('Adding a department');
  const department = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is the name of the department you would like to add?',
    validate: (inupt) => {
      if (!input){
        return 'Please enter a department name';
      }
      return true;
    }
  }]);
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const params = [department.name];
  try {
    const [rows, fields] = await connection.promise().query(sql, params);
    console.table(rows);
    console.log('Added departmenet ${department.name} with ID ${rows.insertId');
    promptUser();
  } catch (error) {
    console.log(error);
  }
  };
promptUser()