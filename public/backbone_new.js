	var topic, subtopic;
	
	Backbone.sync = function(method, model) {
	 
	    $.ajax({
		type: 'post',
		url: '/applications',
		data: "Name="+name+"&Age="+age+"&Address="+address+"&Date="+date+"&Purpose="+purpose,
		success: function(data) {
		    alert("data submitted successfully");
		}
		   });
	}
	
$(function () {
		
    App_Form= Backbone.Model.extend({
	Name: null,
	Age: null,
	Address: null,
	Date: null,
	Purpose: null
	
    });
    
    var subject_model = Backbone.Model.extend({
  	
});
    
	App_collection = Backbone.Collection.extend({
	    
	    initialize: function (models, options) {
	    
	    }
	});
    
	AppView = Backbone.View.extend({
	    el: $("body"),
	    initialize: function () {
		
		 $( "#date" ).datepicker();
	    },
	    events: {
		"click #submit": "SubmitForm",
		"click #cancel": "CancelForm"
	    },
	    
	    
	    SubmitForm: function(){
		
		name = 	$("#name").val();
		age = 	$("#age").val();
		address = $("#address").val();
		date = Date.now();
		purpose = $("#purpose").val();
		var test = new Date(date);
		console.log(test);
		var subject_model = new App_Form();
		subject_model.set({Name: name,Age: age,Address: address,Date: date, Purpose: purpose});  
		subject_model.save();
				
		
	    },	
			CancelForm:function() {
				
			    history.back();
			}
	    
	});
	 
    var appview = new AppView;
});

