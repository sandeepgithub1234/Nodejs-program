var mysql = require('mysql');  
var con = mysql.createConnection({  
    host: "database-4.cu59gsoyy27r.us-east-2.rds.amazonaws.com",  
    user: "admin4",  
    password: "password4" ,
    database: "javatpoint"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
});  

