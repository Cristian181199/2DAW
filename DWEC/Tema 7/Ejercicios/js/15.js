'use strict'

/*
15. Crea un documento con dos tag div, dentro de cada uno de los cuales debe
haber un botón para esconder dichos tag. 
*/
$(function() {
    console.log( "ready!" );
    $("#botondiv1").click(function () {
        $("#div1").hide();
    });
    $("#botondiv2").click(function () {
        $("#div2").hide();
    });
});