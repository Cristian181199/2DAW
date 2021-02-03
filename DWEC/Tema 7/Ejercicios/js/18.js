'use strict'

/* 
18. Crea un documento con un botón que al pulsarlo, nos quite la opacidad de
tres elementos div. El primero ejecútalo sin parámetros, el segundo de manera
lenta y el tercero en tres segundos. 
*/

$(function () {
    $("#boton").click(function () {
        $("#div1").animate({
            opacity: 0.1
        });
        $("#div2").animate({
            opacity: 0.1
        }, "slow");
        $("#div3").animate({
            opacity: 0.1
        }, 3000);
    }, );
});