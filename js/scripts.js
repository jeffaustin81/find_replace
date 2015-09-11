var findReplace = function(message, find, replace) {
    var re = "\\b" + find + "\\b";
    var reg = new RegExp(re, "gi")
    var new_message = message.replace(reg, replace);
    return new_message;
};

$(document).ready(function() {
    $("form#add_message").submit(function(event) {

        var message = $("input#message").val();

        $(".message").text(message);

        $("#original_message").show();
        $("form#add_message").hide();
        $("form#find_replace").show();
        event.preventDefault();

        $("form#find_replace").submit(function(event) {

            var find = $("input#find").val();
            var replace = $("input#replace").val();
            var replace_message = findReplace(message, find, replace);


            $(".new_message").text(replace_message);

            $("#new_message").show();
            $("#original_message").hide();
            $("form#find_replace").hide();
            $("form#home").show();
            event.preventDefault();
        });
    });


});
