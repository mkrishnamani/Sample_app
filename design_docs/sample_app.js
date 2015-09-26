exports.design_doc = {

    "_id" : "_design/backbone",
    "fulltext": {
        "patients": {
            "analyzer": "perfield:{ fname:\"simple\", lname:\"simple\"}",
            "index": /**/function(doc){
                if(!doc.deleted && doc.dtype === 'ad_patient'){
                    var ldoc = new Document();

                    if(doc.fname){
                        ldoc.add(doc.fname, {'field': 'name'});
                    }
		           if(doc.purpose){
                        ldoc.add(doc.purpose, {'field': 'purpose'});
                    }
                    if(doc.address){
                        ldoc.add(doc.address, {'field': 'address'});
                    }
                    if(doc.date){
                        ldoc.add(doc.address, {'field': 'date'});
                    }
                    if(doc.age){
                        ldoc.add(doc.age, {'field': 'age'});
                    }
                    return ldoc;
                }
            }/**/
        }
    },	
  	
 "views" : {
       
	"staffByName" : {
	    "map" : /**/function(doc){
		if(!doc.deleted ){
		    emit(doc._id,null);
		}
	    }/**/
	},

    "staffByDate" : {
            "map" : /**/function(doc){
                if(!doc.deleted){
                    emit([doc.Date], null);
                }
            }/**/
    },		
    }	
}
