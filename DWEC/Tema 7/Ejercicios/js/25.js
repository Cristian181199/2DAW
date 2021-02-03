'use strict'

/* 
25. Crea un programa que al pulsar en un botón se muestre y se oculte la
anchura de un cuadrado
*/

$(function () {
    $("#boton").click(function () {
        $("#div1").animate({
            width: 'toggle'
        });
    }, );
});