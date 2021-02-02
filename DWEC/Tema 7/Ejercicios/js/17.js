'use strict'

/* 
17. Crea un documento con un botón que al pulsarlo, agregue la opacidad de
tres elementos div. El primero ejecútalo sin parámetros, el segundo de manera
lenta y el tercero en tres segundos
*/

$(function () {
    $("#boton").click(function () {
        $("#div1").animate({
            opacity: 1
        });
        $("#div2").animate({
            opacity: 1
        }, "slow");
        $("#div3").animate({
            opacity: 1
        }, 3000);
    }, );
});

/*
--------
-APUNTE-
--------
animate en la velocidad trabaja con milisegundos, lo que quiere decir
que donde pongo 3000 significa 3 segundos ya que 3000ms = 3s.
*/