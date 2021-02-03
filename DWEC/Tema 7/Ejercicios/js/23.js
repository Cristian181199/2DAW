'use strict'

/* 
23. Crea un documento con dos capas, tal que al pulsar sobre la primera fija se
despliegue hacia arriba o abajo la segunda.
*/

$(function () {
    $("#div2").slideUp();
    $("#div1").click(function () {
        $("#div2").slideToggle();
    }, );
});