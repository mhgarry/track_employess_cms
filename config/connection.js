require('dotenv').config();
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});

// execute the SQL scripts
const schema = fs.readFileSync(path.join(__dirname, 'schema.sql')).toString();
connection.query(schema, (err, results) => {
	 if (err) {
		 console.error('Error creating database schema: ', err);
		 return;
	 }
	 console.log('Database schema created!');
});

const seeds = fs.readFileSync(path.join(__dirname, 'seeds.sql')).toString();
connection.query(seeds, (err, results) => {
	 if (err) {
		 console.error('Error seeding database: ', err);
		 return;
	 }
	 console.log('Database seeded!');
});

module.exports = connection;
