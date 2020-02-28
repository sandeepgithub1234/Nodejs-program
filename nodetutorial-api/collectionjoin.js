var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/test";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection('mytutorial').aggregate([
    { $lookup:
       {
         from: 'tutorial',
         localField: 'name',
         foreignField: 'name',
         as: 'name'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});