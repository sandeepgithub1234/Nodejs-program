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
var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";  
var values = [  
['2', 'Bharat Kumar', '25', 'Mumbai'],  
['3', 'John Cena', '35', 'Las Vegas'],  
['4', 'Ryan Cook', '15', 'CA']  
];  
con.query(sql, [values], function (err, result) {  
if (err) throw err;  
console.log("Number of records inserted: " + result.affectedRows);  
});  
});  
