'use strict'

/* 
26. Crear un programa que al pulsar en un botón se mueva un cuadrado 100
px a la derecha y si dentro del cuadrado pone HELLO aumente el tamaño de la
letra.
*/

$(function () {
    $("#boton").click(function () {
        $("#div1").animate({
            right: '100px'
        });
        if ($("#parrafo").text() == "HELLO") {
            $("#div1").animate({
                fontSize: '50'
            });
        } else {
            console.log('Dentro del div no pone HELLO.');
        }
    }, );

});