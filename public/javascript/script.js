$(document).ready(function() {
    $("#header").fadeIn(1000);

    $(".menu").on('mouseover', 'a', function() {
        $(this).css({ "border-bottom": "solid 2px #E3963E" });
    }).on('mouseout', 'a', function() {
        $(this).css({ "border-bottom": "none" });
    })

    $("#about-link").click(function() {
        $("#header").css({ "display": "none" });
        $("#contact").css({ "display": "none" });
        $("#work").css({ "display": "none" });
        $("#about").slideDown("slow");
    });

    $("#work-link").click(function() {
        $("#header").css({ "display": "none" });
        $("#about").css({ "display": "none" });
        $("#contact").css({ "display": "none" });
        $("#work").slideDown("slow");
    });

    $("#contact-link").click(function() {
        $("#header").css({ "display": "none" });
        $("#about").css({ "display": "none" });
        $("#work").css({ "display": "none" });
        $("#contact").slideDown("slow");
    });
});