/* 
 * A Bluemix application using  MongoDB & Node Express 
 * Developed by: Tinniam V Ganesh
 * Date: 06 Aug 2014
 * File: userlist.js
 */
var mongodb = require('mongodb');

// Create a callback function
var mycallback = function(err,results) {
    console.log("mycallback");
    if(err) throw err;
};
/* GET Phone users page. */
exports.list =  function(req, res) {
	
	if (process.env.VCAP_SERVICES) {
	  var env = JSON.parse(process.env.VCAP_SERVICES);
	  if (env['mongodb-2.2']) {
		var mongo = env['mongodb-2.2'][0]['credentials'];
	  }
	} else {
		   var mongo = {
		      "username" : "user1",
		      "password" : "secret",
		      "url" : "mongodb://user1:secret@localhost:27017/test"
	 };
	}
	
	// Setup connection to DB
	var MongoClient = mongodb.MongoClient;
	var db= MongoClient.connect(mongo.url, function(err, db) { 
	  if(err) {
	    console.log("Failed to connect to the database");
	  } else {
	    console.log("Connected to database");
	  }
	  
	  var collection = db.collection('phonebook');
	  
	  //Get all records and display them
	  collection.find().toArray(function(err, items) {
	    	console.log(items);
	        res.render('userlist', {
	            "userlist" : items
	        });
	    }); 
   }); 
};

