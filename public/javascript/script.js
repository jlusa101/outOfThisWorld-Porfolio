// $(document).ready(function() {
//     $("#header").fadeIn(1000);
// });

$(document).ready(function() {
    $("#header").fadeIn(1000);

    $(".menu").on('mouseover', 'a', function() {
        $(this).css({ "border-bottom": "solid 2px #E3963E" });
    }).on('mouseout', 'a', function() {
        $(this).css({ "border-bottom": "none" });
    })

    $("#contact-link").click(function() {
        $("#header").css({ "display": "none" });
        $("#contact").slideDown("slow");
    });
});

// $(document).ready(function() {

// });