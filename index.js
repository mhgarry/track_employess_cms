// require mysql2
const mysql = require('mysql2');
// reuqire inquirer
const inquirer = require('inquirer');
// require console.table
const cTable = require('console.table');
// require database connection
const connection = require('./config/connection');
// prompts user to pick a function to run a process within the application awaits the user to select a function to run
const promptUser = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        // promt the user using inquirer to select a function to run wihin the application
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
          'View department budgets',
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