$(function () {
	
    $.getJSON('/link',function(doc){
	console.log(doc.rows);
	var data = _(doc.rows).map(function(r){return r['doc']});
	$("#content").html(tmpl($("#list").html(), {adminlist: data}));  
	
    });
});
