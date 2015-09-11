var findReplace = function(message, find, replace) {
	var reg = new RegExp(find, "gi")
	var new_message = message.replace(reg, replace); 
	return new_message;
};

// $(document).ready(function () {
// 	$("form#encryption").submit(function(event) {

// 		var my_input = $("input#my_input").val();
// 		var my_output = myFunction(my_input);

// 		$(".my_input").text(my_input);
// 		$(".my_output").text(my_output);


// 		$("#result").show();
// 		event.preventDefault();
// 	});
// });
