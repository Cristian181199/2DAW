'use strict'

/* 
22. Crea un documento con dos capas, tal que al pulsar sobre la primera se
despliegue hacia arriba la segunda. 
*/

$(function () {
    $("#div1").click(function () {
        console.log('Hace click');
        $("#div2").slideUp();
    }, );
});