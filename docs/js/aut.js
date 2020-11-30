function autUser() {
    var a = document.getElementById("pass").value


    var b = document.getElementById("user").value


    if (b == "mrama" && a == "TestUser123") {
        window.location.href = "landingPage.html";
        alert(a)
    } else {
        // alert("incorrect user and password!")
        alert(a)
        alert(b)
    }


}