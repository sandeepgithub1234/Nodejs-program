var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

MongoClient.connect(url,  { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("mycollection").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});