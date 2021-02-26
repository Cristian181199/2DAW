'use strict'

/*
3. Añade al primer ejercicio un campo de texto de tipo number para que el usuario pueda
insertar el id de cuyo usuario desea consultar la información. Crea una página que tenga un
botón “Solicitar usuarios” que, al ser pulsado, realice una petición asíncrona a https://
reqres.in/api/users/{id} y muestre la información del usuario por pantalla. Supón que el id
proporcionado es siempre correcto.
*/

$(function () {
    $('#solicitar').click(() => {
        var idrecogido = $('#idusuario').val();
        $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://reqres.in/api/users/",
                data: {
                    "id": idrecogido
                },
            })
            .done((date) => {
                var div = $('#general');

                //Creacion de tabla
                var tabla = $('<table>');
                var thead = $('<thead>');
                var tr1 = $('<tr>');
                var th1 = $('<th>');
                th1.text("ID");
                var tr2 = $('<tr>');
                var th2 = $('<th>');
                th2.text("NOMBRE");
                var tr3 = $('<tr>');
                var th3 = $('<th>');
                th3.text("APELLIDO");
                var tr4 = $('<tr>');
                var th4 = $('<th>');
                th4.text("EMAIL");
                var tbody = $('<tbody>');

                //Appends
                div.append(tabla);
                tabla.append(thead);
                thead.append(tr1);
                tr1.append(th1);
                thead.append(tr2);
                tr1.append(th2);
                thead.append(tr3);
                tr1.append(th3);
                thead.append(tr4);
                tr1.append(th4);
                tabla.append(tbody);

                //Pintamos usuario requerido
                var usu = date.data;
                var tr5 = $('<tr>');
                var td1 = $('<td>');
                td1.text(usu.id);
                var td2 = $('<td>');
                td2.text(usu.first_name);
                var td3 = $('<td>');
                td3.text(usu.last_name);
                var td4 = $('<td>');
                td4.text(usu.email);

                //Append
                tbody.append(tr5);
                tr5.append(td1);
                tr5.append(td2);
                tr5.append(td3);
                tr5.append(td4);

            });

    });

});