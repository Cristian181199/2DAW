'use strict'

/* 
24. Crea un programa que al pulsar en un botón anime un cuadrado
moviéndolo a la izquierda 375 px y lo haga más pequeño 150 px.
*/

$(function () {
    $("#boton").click(function () {
        $("#div1").animate({
            left: '375px',
            height: '-=150px',
            width: '-=150px'
        });
    }, );
});