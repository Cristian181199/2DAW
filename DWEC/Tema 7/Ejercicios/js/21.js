'use strict'

/* 
21. Crea un documento con dos capas, tal que al pulsar sobre la primera se
despliegue hacia abajo la segunda. 
*/

$(function () {
    $("#div2").slideUp();
    $("#div1").click(function () {
        console.log('Hace click');
        $("#div2").slideDown();
    }, );
});