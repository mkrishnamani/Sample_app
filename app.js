var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var qs = require('querystring');
var db = require('nano')("http://admin:admin@localhost:5984/staff_app")
 , params   = {include_docs: true, descending: true};
//var main_db = require('nano')("http://admin:admin@localhost:5984/sample_app");
app.get('/',function(req,res) {
    
    fs.readFile('public/newsample.html','utf8',function(error,text){
	res.send(text);
    });
            
})

app.get('/Scripts/microtemplates.js',function(req,res) {
    
    fs.readFile('public/Scripts/microtemplates.js','utf8',function(error,text){
	res.send(text);
    });
            
})

app.get('/Scripts/datepicker.js',function(req,res) {
    
    fs.readFile('public/Scripts/datepicker.js','utf8',function(error,text){
    res.send(text);
    });
            
})

app.get('/list1.js',function(req,res) {
    
    fs.readFile('public/list1.js','utf8',function(error,text){
	res.send(text);
    });
            
})

app.get('/link',function(req,res) {

       
    db.list(params,function(err, body,headers) {
	if (!err) {
	    body.rows.forEach(function(doc) {
		var doc = body;
		res.send(doc);
		
	    });
	}
    });
    // main_db.view('backbone', 'staffByDate', opts, function(err, dbres){
    // if(err){ console.log(err); res.send({error: 'Error!'}); return;}
    // var doc, docs = [], patient_ids = [], patients = [],patient_byreference = [];
    // _(dbres.rows).each(function(row){
    //     doc = row.doc;
    //     docs.push(doc);
    //     res.send(doc);
        
    // });
    // var obj = { docs: docs };
    
})

app.get('/RegistrationForm',function(req,res) {
    
    fs.readFile('public/competencyform.html','utf8',function(error,text){
	res.send(text);
    });
            
})

app.get('/backbone_new.js',function(req,res) {
    
    fs.readFile('public/backbone_new.js','utf8',function(error,text){
	res.send(text);
    });
    
})

app.get('/backbone.localstorage-min.js',function(req,res) {
    
    fs.readFile('public/backbone.localstorage-min.js','utf8',function(error,text){
	res.send(text);
    });
    
})

app.get('/CSS/jquery-ui.css',function(req,res) {
    
    fs.readFile('public/CSS/jquery-ui.css','utf8',function(error,text){
	res.send(text);
    });
    
})


app.get('/CSS/form.css',function(req,res) {
    
    fs.readFile('public/CSS/form.css','utf8',function(error,text){
	res.send(text);
    });
            
})

app.post('/applications',function(req,res) {
    
    var body='';
    req.on('data', function (data) {
	body +=data;
    });
    req.on('end',function(){
	var POST =  qs.parse(body);
    console.log(db);
	db.insert(POST, function(err, body) {
	    if (!err)
      console.log(body);
	});
    });
    
}).listen(4567);

console.log('Server running at http://127.0.0.1:4567/');








