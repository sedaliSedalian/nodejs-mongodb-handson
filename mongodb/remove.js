var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected to database.")
    var dbo = db.db("openjs");
    var collection = dbo.collection("customers");
    collection.deleteOne({ name: "Company Inc" }, function(err, res) {
        if (err) throw (err);
        console.log("Removed Successfully");
        console.log("%s", res);
        db.close();
    });
});