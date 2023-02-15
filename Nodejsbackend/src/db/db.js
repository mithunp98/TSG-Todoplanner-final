const mysql = require("mysql");
const { BadRequestError, NotFoundError } = require('../utils/api-errors');




const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todoplanner'
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Mysql: Connected');
});

db.promise = (sql) => {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err.message)
        reject(new Error("error in executing sql query"));
      } else {
        resolve(result);
      }
    });
  });
};




module.exports = db;
