var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Data";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Data");
  var query = { name:"basketball" };
  dbo.collection("Todos").deleteOne(query ,function(err, result) {
    if (err) throw err;
    console.log('one item deleted');
    db.close();
  });
});