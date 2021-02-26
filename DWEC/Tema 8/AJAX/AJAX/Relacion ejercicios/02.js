'use strict'

/*
2. Crea una página que tenga dos campos de texto y un botón “Añadir usuario”. Al pulsar el
botón, se debe realizar una llamada asíncrona a https://reqres.in/api/users para crear un
nuevo usuario con los datos proporcionados en los campos de texto mediante un JSON. Este
JSON debe contener la clave “first_name” y la clave “last_name”. Debe mostrarse la
respuesta del servidor cuando se reciba, incluyendo su código de respuesta y los datos del
nuevo usuario (los mismos que se mostraban en la tabla del ejercicio previo) si se reciben.
*/

$(function () {
    console.log("Ready!");
    $('#anadir').click(() => {
        //Recogida de datos
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        //Creacion objeto para el json
        var objetoDatos = {
            "first_name": nombre,
            "last_name": apellido,
        };

        $.ajax({
                type: "POST",
                dataType: "json",
                url: "https://reqres.in/api/users",
                data: objetoDatos,
            })
            .done((data, text, x) => {
                var div = $('#general');
                var estatus = x.status;
                var salto = $("<br>")

                var respuesta = x.responseText;
                var id = data.id;
                let nombre2 = data.first_name;
                let apellido2 = data.last_name;
                div.text("El codigo de estado es: " + estatus + " La respuesta es: " + respuesta + " El ID es: " + id + " El nombre es: " + nombre2 + " El apellido es: " + apellido2);
            });

    });

});