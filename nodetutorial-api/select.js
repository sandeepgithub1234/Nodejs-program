var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Data";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("Data");

  dbo.collection("Todos").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.text);
    console.log(result.completed);
    console.log('finish first part');
  });

  dbo.collection("Todos").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log('finish 2 part');
    });
    dbo.collection("Todos").find().limit(5).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});