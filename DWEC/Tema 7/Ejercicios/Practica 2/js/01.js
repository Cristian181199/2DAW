'use strict'

/*
- Pagina inicial
    Inicialmente la página presentará un campo de texto y un botón “Crear”.
    ● Dicho campo de texto tiene una validación para comprobar que contiene un
    número del 1 al 5 (el campo es de tipo “text” y la validación es propia, no
    Bootstrap o similar).
    ● El botón estará inicialmente desactivado y solo se activará cuando la
    validación sea correcta. Si el contenido del campo cambia y pasa a ser
    incorrecto, el botón cambia su estado de manera acorde.
    ● Cuando se pulsa el botón “Crear”, se pasa a “una nueva página” descrita a
    continuación. La desaparición de estos elementos y la aparición de los
    nuevos se hará con un efecto de fundido lento.
    !Estos elementos serán etiquetas introducidas en el HTML de la página!
 */


$(function () {
    /*Capturamos input a validar y boton Crear*/
    var inputValidar = $("#validardel1al5");
    var botonCrear = $("#botoncrear");

    /*Capturamos el evento y validamos el input*/
    inputValidar.keyup(() => {
        if (inputValidar.val() >= 1 && inputValidar.val() <= 5) {
            botonCrear.attr("disabled", false);
        } else {
            botonCrear.attr("disabled", true);
            alert("Tiene que ser un numero entre el 1 y el 5");
        }
    });

    /*
    - Pagina principal
        ● En la parte superior habrá un encabezado que muestra el número que se
            introdujo en el campo de texto.
        ● A continuación un botón “Añadir”.
        ● Debajo habrá dispuestos horizontalmente tantos círculos como el número
            que fue introducido. Los círculos se forman y colorean mediante CSS.
        !Estos elementos se generarán mediante código javascript y la librería jQuery!
    */

    /*Capturamos el evento y desaparecemos el input y el boton*/
    botonCrear.click(() => {
        var numeroIntroducido = inputValidar.val();
        inputValidar.hide(2000);
        botonCrear.hide(2000);

        /*Creamos los nuevos elementos*/
        var h2 = $('<h2>' + numeroIntroducido + '</h2>');
        h2.hide();
        h2.appendTo("body");
        h2.show(4000);

        var botonAnadir = $('<button> Anadir </button>');
        botonAnadir.hide();
        botonAnadir.appendTo("body");
        botonAnadir.show(4000);

        var salto = $('</br>');
        salto.appendTo("body");

        var span = $("<span id='spanCirculos'></span>");
        span.appendTo("body");

        for (let i = 0; i < numeroIntroducido; i++) {
            var circulo = $("<div class='circulo'></div>");
            circulo.hide();
            circulo.appendTo('#spanCirculos');
            circulo.show(4000);

        }
        if (numeroIntroducido == 5) {
            botonAnadir.attr("disabled", true);
        } else {
            botonAnadir.attr("disabled", false);
        }


        botonAnadir.click(() => {
            h2.text(numeroIntroducido++);
            var nuevonumero = h2.text();
            if (nuevonumero == 5) {
                botonAnadir.attr("disabled", true);
            } else {
                botonAnadir.attr("disabled", false);
            }

            var circulosTodos = $(".circulo");

            var circulo = $("<div class='circulo'></div>");
            circulo.appendTo('#spanCirculos');
            circulo.hide();
            circulosTodos.slideUp(3000);
            circulosTodos.show(4000);
        });
        var circulosTodos = $(".circulo");

        circulosTodos.mouseenter(() => {
            circulosTodos.attr("id", 'encima')
        });

        circulosTodos.mouseleave(() => {
            circulosTodos.attr("id", '')
        });

    });
});