#!/usr/local/bin/node

var _ = require('underscore');
//var config = require('config');
var nano = require("nano");
//var dbhost = config.hosts.db;
//var dbServer = nano("http://" + dbhost.user + ':' + dbhost.password + '@' + dbhost.host + ':' + dbhost.port);
var dbServer = require('nano')("http://admin:admin@localhost:5984");
var dbname = process.argv[2];
var newDocPath = process.argv[3];
var newDocPropName = process.argv[4];

if(dbname && newDocPath){
    var newDoc = require(newDocPath)[newDocPropName];;
    var db = dbServer.db.use(dbname);

    db.get(newDoc._id, function(err, resp){
    // db.get('123', function(err, resp){
	if(!err){
	    console.log(resp);
	    newDoc._rev = resp._rev;
	    db.insert(newDoc, function(err, resp){
		if(!err){
		    console.log('Successfully updated doc');
		}else{
		    console.log(err);
		}
	    });
	}else if(err.status_code == 404){
	    db.insert(newDoc, function(err, resp){
		if(!err){
		    console.log('Successfully updated doc');
		}else{
		    console.log(err);
		}
	    });
	}else{
	    console.log("Error: ===============");
	    console.log(err);
	}
    });
}
