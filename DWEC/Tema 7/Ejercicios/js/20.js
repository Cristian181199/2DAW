'use strict'

/* 
20. Crea un documento con un botón que al pulsarlo, agregue o quite la
opacidad de tres elementos div. El primero ejecútalo en modo lento con una
opacidad de 0,15, el segundo en modo lento con una opacidad de 0,4 y el
tercero, en modo lento con una opacidad de 0,7.
*/

$(function () {
    $("#boton").click(function () {
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    }, );
});