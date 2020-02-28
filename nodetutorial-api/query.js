var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Data";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Data");
  var query = { text:"work from home" };
  dbo.collection("Todos").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});