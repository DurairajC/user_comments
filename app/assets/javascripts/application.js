// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function post_comments(evt)
{


	var comment = $('#comment').val();

	if(comment != "")
	{

	$('.ajax-loader').css("visibility", "visible");
	$.getJSON("https://api.ipify.org/?format=json", function(e) {
    var ip_address= e.ip
	
	//alert(ip_address);

	//alert(comment +" "+ip_address);

	var url1 = "/user_comments/save_comment"

	$.ajax({
      type: "POST",
      url: url1,
      data: "comment="+comment+"&ip_address="+ip_address,
      success: function(response) {
        //update the DOM
        //alert("sucess");
		$('#comment').val("");
		$('#all_comments').load("/user_comments/all_comments");
		$('.ajax-loader').css("visibility", "hidden");
        //$("#all_comments").load("<%= escape_javascript(render partial: 'all_comments') %>");
      }
    });
    //event.preventDefault();

	});
	

	}
	else
	{
		alert("comment filed is empty.. please add something...")
	}





}