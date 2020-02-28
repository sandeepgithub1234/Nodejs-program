var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Data";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Data");
  var myquery = { text:"work from home" };
  var newvalues = { $set:{text:"work from office",completed:false } };
  dbo.collection("Todos").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});