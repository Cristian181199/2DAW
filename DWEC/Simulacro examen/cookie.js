function setCookie(cname, cvalue, exdays = 1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function deleteCookie(cnombre) {
    setCookie(cnombre, '', 0);
}



// TODO LO MIO




function usuarioActivo(nombre = "", email = "", dni = "", rango = "invitado") {
    this.nombre = nombre;
    this.email = email;
    this.dni = dni;
    this.rango = rango;

    this.cambiarRango = function (rangoN) {
        return this.rango = rangoN;
    }
}

function iniciar() {
    var usuario = new usuarioActivo();
    setCookie("nombre", usuario.nombre);
    setCookie("email", usuario.email);
    setCookie("dni", usuario.dni);
    setCookie("rango", usuario.rango);
}