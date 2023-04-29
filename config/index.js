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
  const sql = 'SELECT department.id AS id, department.name AS department FROM department';
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
  try {
    const answer = await new Promise((resolve, reject) => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'addDept',
          message: 'What department do you want to add?',
          validate: (addDept) => {
            if (addDept) {
              return true;
            }
            console.log('Please enter a department');
            return false;
          },
        },
      ])
        .then((answer) => resolve(answer))
        .catch((error) => reject(error));
    });

    const sql = `INSERT INTO department (name)
                VALUES (?)`;

    connection.query(sql, answer.addDept, (err, result) => {
      if (err) throw err;
      console.log(`Added ${answer.addDept} to departments!`);

      showDepartments();
    });
  } catch (error) {
    console.error(error);
  }
};

// function to add a role
const addRole = async () => {
  try {
  // get departments list for inquirer prompt
    const departments = await new Promise((resolve, reject) => {
      const sql = 'SELECT id, name FROM department';

      connection.query(sql, (err, result) => {
        if (err) reject(err);
        const departments = result.map((department) => ({ name: department.name, value: department.id }));
        resolve(departments);
      });
    });
    // prompt user to enter role information
    const answers = await inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'What is the title of the new role?',

      validate: (title) => {
        if (title) {
          return true;
        }
        console.log('Please enter a title');
        return false;
      },
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary for this role?',
      validate: (salary) => {
        if (isNaN(salary) || !salary) {
          console.log('Please enter a valid number');
          return false;
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'department',
      message: 'Which department does this role belong to?',
      choices: departments,
    },
    ]);
    const sql = 'INSERT INTO role SET ?';
    const values = {
      title: answers.title,
      salary: answers.salary,
      department_id: answers.department,
    };

    await new Promise((resolve, reject) => {
      connection.query(sql, values, (err, result) => {
        if (err) reject(err);
        console.log(`Added ${answers.title} to roles!`);
      });
    });
  } catch (error) {
    console.error(error);
  }
};

// function to add an employee
const addEmployee = async () => {
  try {
    // prompt user for employee's first and last name
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'What is the employee\'s first name?',
        validate: (firstName) => {
          if (firstName) {
            return true;
          }
          console.log('Please enter the employee\'s first name');
          return false;
        },
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'What is the employee\'s last name?',
        validate: (lastName) => {
          if (lastName) {
            return true;
          }
          console.log('Please enter the employee\'s last name');
          return false;
        },
      },
    ]);

    // construct paramaters array with first and last name for sql query
    const params = [answers.firstName, answers.lastName];
    // get roles list from the roles table
    const [roleRows] = await connection.execute('SELECT id, title FROM role');
    // construct choices array for the inquirer prompt
    const roles = roleRows.map((role) => ({
      name: role.title,
      value: role.id,
    }));
    // prompt user to select employee's role from the available roles table
    const roleChoice = await inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: roles,
      },
    ]);
    // add role id to the paramsareters array
    params.push(roleChoice.roleId);
    // get list of employees to choose from for employee manager
    const [managerRows] = await connection.execute('SELECT id, first_name, last_name FROM employee');
    // construct choices array for the inquirer manager prompt
    const managers = managerRows.map((manager) => ({
      name: `${manager.first_name} ${manager.last_name}`,
      value: manager.id,
    }));
    // prompt user to select employee/s manager from list of available managers
    const managerChoice = await inquirer.prompt([{
      type: 'list',
      name: 'manager',
      message: 'Who is the employee\'s manager?',
      choices: managers,
    },
    ]);
    // add manager id to the parameters array
    params.push(managerChoice.mangerId);
    // execute the sql query to insert new employee into database
    const [rows] = await connection.execute(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES (?,?,?,?)`,
      params,
    );
    console.log(`Added ${answers.firstName} ${answers.lastName} to employees!`);
  } catch (error) {
    console.error(error);
  }
  showEmployees();
};
promptUser()
