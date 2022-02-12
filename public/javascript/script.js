var form = document.getElementById("my-form");

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
        form.reset();
        $("#header").css({ "display": "none" });
        $("#about").css({ "display": "none" });
        $("#work").css({ "display": "none" });
        $("#contact").slideDown("slow");
    });

});

// Handles form submissions and sends myself an email from the user 
async function handleSubmit(e) {
    e.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(e.target);
    fetch(e.target.action, {
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
                    status.innerHTML = data["errors"].map(err => err["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem sending your email";
                }
            })
        }
    }).catch(err => {
        status.innerHTML = "Oops! There was a problem sending your email";
    });

}
form.addEventListener("submit", handleSubmit)