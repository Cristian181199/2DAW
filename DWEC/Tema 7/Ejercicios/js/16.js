'use strict'

/* 
16. Crea un documento con un botón que al pulsarlo, oculte un párrafo con
velocidad rápida. 
*/

$(function () {
    $("button").click(function () {
        $("p").hide('fast');
    });
});