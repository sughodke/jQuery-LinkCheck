var debugmode = false;


function print_string_to_body(s) {
	if (debugmode == true)
	  $('body').before("<pre>"+s+"</pre>");
}

function async_check_link(link, elem) {
	print_string_to_body(link)
    var jqxhr = $.get(link,
    function(data) {
        print_string_to_body("success");
		elem.css('background-color','green')
    })
    .error(function() {
        print_string_to_body("error");
		elem.css('background-color','red')
    })
    .complete(function() {
        print_string_to_body("complete");
		elem.append(' ✓')
    });
}

$(document).ready(function() {
    $('body').find('a').each(
    function(index) {
		$(this).css("background-color","yellow")
        async_check_link($(this).attr('href'), $(this));
    }
    );
});