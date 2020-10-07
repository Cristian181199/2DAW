alert('Hola mundo en JavaScript');
alert('Texto nuevo');
var texto = 'Variable';
alert('Algo ' + texto);
document.write("<p> Document Write a lo loko </p>");
document.write(44444 + 44444);
var nombre = "Cristian";
document.getElementById("div2").innerHTML = "<p>Esto es tu nombre:" + nombre + "</p>";
var c = confirm("Pulsa un boton");
var texto;
if (c) {
    texto = "aceptar"
} else {
    texto = "cancelar"
}
document.getElementById("div3").innerHTML = ("Has pulsado: " + texto);