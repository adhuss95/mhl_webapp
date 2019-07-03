var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
const config = {
    
    useNewUrlParser: true,
};

MongoClient.connect(url,config, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});