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

var form = document.getElementById("my-form");

// Handles form submissions and sends myself an email from the user 
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your message!";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem sending your email";
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem sending your email";
    });

}
form.addEventListener("submit", handleSubmit)