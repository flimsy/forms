$(document).ready(function() {

    var correctPassword = "12345";
    $("form").submit(function(e) {
        e.preventDefault();
        var firstname = $("#firstname").val();
        var password = $("#password").val();
        var date = $("#date").val();

        dateParts = date.split('/');



        if (firstname === "") {
            $("#notification").html("please fill out the name, yo!");
        } else if (Number(dateParts[0]) > 12 || Number(dateParts[0] < 0)) {
            $("#notification").html("wrong date format");
        } else if (Number(dateParts[1]) > 31 || Number(dateParts[1]) < 0) {
            $("#notification").html("wrong date format");
        } else if (Number(dateParts[2]) < 1000) {
            $("#notification").html("wrong date format");
        } else if (password === correctPassword) {
            //do something cool
            $("#notification").html("password was correct");
            window.location.replace("./thank-you.html")
        } else {
            //tell the user the password was wrong
            $("#notification").html("Wrong password");
        }
    });

});

function keyDown(event) {
    var key = String.fromCharCode(event.keyCode);

    if (isNaN(key)) {
        document.getElementById("results").innerHTML = "Letter";
    } else {
        document.getElementById("results").innerHTML = "Number";
    }
}

