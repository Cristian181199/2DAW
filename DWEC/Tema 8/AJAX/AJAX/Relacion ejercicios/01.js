'use strict'

/*
1. Crea una página que tenga un botón “Solicitar usuarios” que, al ser pulsado, solicite unos
datos de manera asíncrona a https://reqres.in/api/users y muestre la información por
pantalla. Debe mostrar el número total de páginas, la página actual y una tabla que muestra
id, nombre, apellido e email de todos los usuarios.
*/

$(function () {
    console.log("ready!");
    $('#solicitar').click(() => {
        $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://reqres.in/api/users",
            })
            .done((dates) => {
                console.log(dates);
                //Mostrar paginas totales y actual
                var paginas_totales = dates.total_pages;
                var pagina_actual = dates.page;
                var div = $('#general');
                var h3 = $('<h3>');
                h3.text("La pagina actual es: " + pagina_actual + " de " + paginas_totales)
                div.append(h3);

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

                //Tabla dinamica
                var prueba = dates.data;
                console.log(prueba.length);
                for (let i = 0; i < prueba.length; i++) {
                    var tr = $('<tr>');
                    var td1 = $('<td>');
                    var td2 = $('<td>');
                    var td3 = $('<td>');
                    var td4 = $('<td>');
                    td1.text(prueba[i].id);
                    td2.text(prueba[i].first_name);
                    td3.text(prueba[i].last_name);
                    td4.text(prueba[i].email);
                    tbody.append(tr);
                    tr.append(td1);
                    tr.append(td2);
                    tr.append(td3);
                    tr.append(td4);

                }

            })
    });
});