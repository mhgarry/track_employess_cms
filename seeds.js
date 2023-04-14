const inquirer = require('inquirer');
const mysql =require('mysql2/promise');
require('dotenv').config();
//creating our functions to populate the tables labeled as "seeds" 
//passing in mysql2/promise to create a connection with and insert the employees into the database in one step
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
//prompt employer with questions about employee and add employee to database with answers
async function populateEmployees () {
  //create connection with the database
  const connection = await 
  mysql.createConnection({
   //data
  });
  //start our inquirer prompt 
  const answers = await 
  inquirer.prompt([{
  type: 'input', 
  name: 'first_name', 
  message: `Enter employee first name: `
  },
  {
  type: 'input',
  name: 'last_name',
  message: `Enter employee last name: `
  },
  {
  type: 'choices',
  name: 'role_id',
  message: `what is your role at the company?`,
  choices: `['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', Accountant', 'Legal Team Lead',
  'Lawyer']`
  },
  {
  type: 'checkbox',
  name: 'manager_id',
  message: `Are you a manager?`,
  choices: `['yes', 'no']`
  }]);
  const employeeTrack = [
    {sales_lead : 100000}, 
    {salesperson : 80000}, 
    {lead_engineer : 150000}, 
    {software_engineer : 120000},
    {account_manager: 160000},
    {accountant : 125000},
    {legal_team_lead : 250000},
    {lawyer : 190000}]
//pass inquirer data into the employee table
const [result] = await connection.execute(`INSERT INTO employees (first_name), 
  (last_name), 
  role_id, 
  manager_id VALUES ({'yes' : 'no'})`, 
  [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]
);
//close the connection using mysql async await promise properties 
await connection.end();
console.log('Employee added!');
}

populateEmployees()

//example function to see if it works. The inquirer function works but the sql syntax needs to be fixed 