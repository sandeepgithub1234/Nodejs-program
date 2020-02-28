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
var sql="UPDATE employees SET city = 'Delhi' WHERE city = 'Allahabad'";
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("update done!");  
});  
});  