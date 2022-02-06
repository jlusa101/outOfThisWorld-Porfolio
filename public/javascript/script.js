$(document).ready(function() {
    $("#header").fadeIn(1000);
});

$(document).ready(function() {
    $(".menu").on('mouseover', 'a', function() {
        $(this).css({ "border-bottom": "solid 2px #E3963E" });
    }).on('mouseout', 'a', function() {
        $(this).css({ "border-bottom": "none" });
    })
});