'use strict'

/* 
19. Crea un documento con un botón que al pulsarlo, nos agregue o quite la
opacidad de tres elementos div. El primero ejecútalo sin parámetros, el
segundo de manera lenta y el tercero en tres milisegundos. 
*/

$(function () {
    $("#boton").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    }, );
});