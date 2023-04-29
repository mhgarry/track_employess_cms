# TRACK EMPLOYEES CMS
  This backend application implementing mySql to create an SQL database along with nodejs and npm packages console.table, 
  and sequelize allows any business owner or employer to keep track of employees first names, last names, department, role, salary,
  and assigned manager with simple prompts. 

## Table of Contents
  
  - [Table of contents][Table of contents]
  - [Description][Description]
  - [Installation][Installation]
  - [Usage][Usage]
  - [Features][Features]
  - [Resources][Resources]
  - [Tests][Tests]
  - [How to Contribute][How to Contribute]
  - [Questions][Questions]

## Description 
  Track Employees CMS is a server side application that gives any employer, manager or business owner the ability to keep a
  database about their employees and it assigns each of their employees an id to go along with data values of first_name,
  last_name, departments, roles, salary, and  assigned manager.  runs in the command prompt using nodejs that creates an SQL
  database with a set amount of tables to populate each row based on inquirer prompts the user is given. This application uses
  mySql to create the SQL databases in nodejs, inquirer to prompt the user to populate the tables, console.table to print results,
  and sequelize to further interact with SQL data in mySql. This application makes a scalable database that grows along with your
  compnay It  This application is still under construction. 

## Installation
  To run this app the user must have a computer with a text editor or ide to clone the github repository of this project to. The
  user must also have nodejs and the NPM package dependencies inquirer. mySql2, and console.table installed as well as mySql to
  populate and create the table. After the user runs the inquirer prompts by typing node seeds.js to run the inquirer prompt and
  answer the questions used to populate th SQL employee database. These tools are 100% open source and free to use and available 
  on Windows, Mac, and Linux.


  ### Relevant isntallation links
    <a href=https://nodejs.org/download> download and install nodejs </a>

    <a href=https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/> download and install mySql</a>

    <a href=https://www.npmjs.com/package/console.table>installation instructions for the console.table dependency</a>
  
    <a href=http://adilapapaya.com/docs/inquirer>installation instructions inquirer dependency</a>

    <a href=https://code.visualstudio.com/>Installation and download instructions for vsCode text editor</a>

    <a href=https://www.npmjs.com/package/mysql2>Installation and download instructions for mySql2</a>
## Usage 
  To use this application the user must install the above packages and clone this github repository. Then they most simply must 
  run the file seeds.js and they are prompted with questions. These quesions populate their database and at the end of the quesiton 
  prompts the users employee data SQL database is assembled.
![Show Employees][Show Employees]
## Features

  This application has the features of creating an easy to maintain SQL database by simply answering a series of questions on 
  terminal. It features inquirer which prompts the user to answer questions to create data passed into our SQL database tables.
  It features mySql and mySql2 which gives the user the ability to create a database in their text editor and in conjunction with
  inquirer  makes that process extremely simple for the user. It also features console.table which gives the user a way to
  visualize their SQL database. Features are still under construction at this moment. With the implementation of these features
  this application makes set up to grow and scale with your business. This application adds employees and the predefined section as 
  is and the sections of this database are completley cuztimizable using the tool set the user installed along with cloning the
  application. 
![start program][start program]
![Delete Employee][Delete Employee]
## Resources
  I used nodejs, mySql, mySql2, inquirer, sequelize, nodemon, and console.table to build this app. I also used
  https://dzone.com/articles/how-to-interact-with-a-database-using-async-function as a reference for creating async 
  functions to populate a database with. I used https://www.tabnine.com/code/javascript/functions/inquirer/prompt for examples 
  of how to prompt the users with inquirer questions and how to get the data I needed in usable form. I used this website to figure
  out how i can use inquirer and mysql2 together https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f. I also used 
  the dotenv npm to make a .env file and I added a .env.example file for other developers to use

## Tests
  Under construction 

## How to Contribute 
  Any developer is welcome to contribute to this project by forking the repository and using the guidlines laid out by github 
  for contributions found here https://docs.github.com/en/get-started/quickstart/contributing-to-projects. I used a .env file on
  with this project and I have a .env.example for other developers to use. Used this page for conn.execute command
  https://www.tabnine.com/code/javascript/functions/oracledb/Connection/execute

## Questions 
  If you have any questions, contributions, or inquires about this application or any of the other applications on my repository
  feel free to email me at mhgarry92@gmail.com or reach out to me at github.com/mhgarry. If you need further assistance on
  installation, customization, or any other aspect of this application reach out to me.
## Video Demo 
  https://watch.screencastify.com/v/x2iYelUDB1kAQxxd7hfn

## sources 
	https://www.sitepoint.com/using-node-mysql-javascript-client/
	https://www.w3schools.com/nodejs/nodejs_mysql_update.asp
  https://www.appsloveworld.com/mysql/100/845/passing-sql-queries-into-inquirer-prompt
	https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
	https://dev.mysql.com/doc/refman/8.0/en/mysql.html
	https://dev.mysql.com/doc/refman/8.0/en/mysql.html
	https://dev.to/hugodias/building-your-first-interactive-node-js-cli-1g2c
	https://www.tutorialspoint.com/mysql/mysql-select-database.htm

[Questions]: #questions
[How to Contribute]: #how-to-contribute
[Tests]: #tests
[Resources]: #resources
[Features]: #features
[Usage]: #usage
[Installation]: #installation
[Description]: #description
[Table of contents]: #table-of-contents
[start program]: images/startemployeemanager.png
[Show Employees]: images/showemployees.png
[Delete Employee]: images/deleteemployee.png
