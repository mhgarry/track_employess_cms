//creating our functions to apopulate the tables labeled as "seeds" 
//https://dzone.com/articles/how-to-interact-with-a-database-using-async-functi used as reference


//this will create the data for the employee table 
//used the query method to trigger our incoming inquirer propmt function below 
  async employeePopulated = () => {
  const roles = await queries.getAllroles()
  const employees = await queries.getAllEmployees() 
  }
//using async await inquirer prompt to populate role.title and role.id with the answers to prompted question
const yourRole = roles.map((role) => 
({
  name : role.title,
  value : role.id
  }));