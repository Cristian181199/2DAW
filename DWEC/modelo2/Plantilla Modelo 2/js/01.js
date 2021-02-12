'use strict'

window.addEventListener('load', () => {
    /*Creamos la funcion constructora del objeto */
    function Menu(id, platos, precio, bebida = '') {
        this.id = id;
        this.platos = platos;
        this.precio = precio;
        this.bebida = bebida;
    }

    /* Creamos el metodo para cambiar fechaEntrega*/
    this.cambiarBebida = function (nuevaBebida) {
        this.bebida = nuevaBebida;
    }


    /*Creamos los libros*/
    var sopa = new Menu(1, ["Sopa", "Pollo", "Yogurt"], 10.25);
    var ensalada = new Menu(2, ["Ensalada", "Ternera", "Flan"], 10.95);

    /*Almacenamos los libros en un array*/
    var arrayMenu = [
        sopa,
        ensalada
    ];

    /*Capturamos botones y div 2*/
    var botonAdministrador = document.querySelector("#entrarAdmin");
    var botonEntrar = document.querySelector("#entrarCliente");
    var contenedorDos = document.querySelector("#contenedorDos");

    /*Capturamos el evento click sobre el boton administrador*/
    botonAdministrador.addEventListener('click', () => {

        /*Creamos input y label para ID*/
        var label1 = document.createElement('label');
        label1.for = 'id';
        label1.innerHTML = 'Introduce el ID: ';
        var input1 = document.createElement('input');
        input1.type = 'number';
        input1.name = 'id';
        input1.id = 'id';

        /*Creamos un salto*/
        var salto1 = document.createElement('br');

        /*Creamos input y label para Primer plato*/
        var label2 = document.createElement('label');
        label2.for = 'primerplato';
        label2.innerHTML = 'Introduce el Primer Plato: ';
        var input2 = document.createElement('input');
        input2.type = 'text';
        input2.name = 'primerplato';
        input2.id = 'primerplato';

        /*Creamos un salto*/
        var salto2 = document.createElement('br');

        /*Creamos input y label para Segundo Plato*/
        var label3 = document.createElement('label');
        label3.for = 'segundoplato';
        label3.innerHTML = 'Introduce el Segundo Plato: ';
        var input3 = document.createElement('input');
        input3.type = 'text';
        input3.name = 'segundoplato';
        input3.id = 'segundoplato';

        /*Creamos un salto*/
        var salto3 = document.createElement('br');

        /*Creamos input y label para Postre*/
        var label4 = document.createElement('label');
        label4.for = 'postre';
        label4.innerHTML = 'Introduce el Postre: ';
        var input4 = document.createElement('input');
        input4.type = 'text';
        input4.name = 'postre';
        input4.id = 'postre';

        /*Creamos un salto*/
        var salto4 = document.createElement('br');

        /*Creamos input y label para Precio*/
        var label5 = document.createElement('label');
        label5.for = 'precio';
        label5.innerHTML = 'Introduce el Precio: ';
        var input5 = document.createElement('input');
        input5.type = 'number';
        input5.name = 'precio';
        input5.id = 'precio';

        /*Creamos un salto*/
        var salto5 = document.createElement('br');



        /*Creamos el boton añadir y volver*/
        var botonAñadir = document.createElement('button');
        botonAñadir.innerHTML = 'Añadir';
        botonAñadir.id = 'añadir';
        var botonVolver = document.createElement('button');
        botonVolver.id = 'volver';
        botonVolver.innerHTML = 'Volver';


        /*Metemos todo lo creado*/
        contenedorDos.appendChild(label1);
        contenedorDos.appendChild(input1);
        contenedorDos.appendChild(salto1);
        contenedorDos.appendChild(label2);
        contenedorDos.appendChild(input2);
        contenedorDos.appendChild(salto2);
        contenedorDos.appendChild(label3);
        contenedorDos.appendChild(input3);
        contenedorDos.appendChild(salto3);
        contenedorDos.appendChild(label4);
        contenedorDos.appendChild(input4);
        contenedorDos.appendChild(salto4);
        contenedorDos.appendChild(label5);
        contenedorDos.appendChild(input5);
        contenedorDos.appendChild(salto5);
        contenedorDos.appendChild(botonAñadir);
        contenedorDos.appendChild(botonVolver);

        /*Deshabilitado de botones*/
        botonAdministrador.disabled = true;
        botonEntrar.disabled = true;
        botonAñadir.disabled = false; //CAMBIAR

        botonAñadir.addEventListener('click', () => {
            console.log("click en añadir");

            var valorId = document.querySelector('#id').value;
            console.log(valorId);
            var valorPrimer = document.querySelector('#primerplato').value;
            console.log(valorPrimer);
            var valorSegundo = document.querySelector('#segundoplato').value;
            console.log(valorSegundo);
            var valorPostre = document.querySelector('#postre').value;
            console.log(valorPostre);
            var valorPrecio = document.querySelector('#precio').value;
            console.log(valorPrecio);

            var nuevo = new Menu(valorId, [valorPrimer, valorSegundo, valorPostre], valorPrecio);

            arrayMenu.push(nuevo);

        });






        /*Capturamos el evento click sobre el boton Volver*/
        botonVolver.addEventListener('click', () => {

            /*Limpiamos el contenedorDos*/
            contenedorDos.innerHTML = ' ';

            /*Habilitacion de botones*/
            botonAdministrador.disabled = false;
            botonEntrar.disabled = false;
        });


    });

    /*Capturamos el evento click sobre el boton Entrar*/
    botonEntrar.addEventListener('click', () => {
        /*Creamos los elementos de la tabla*/
        var tabla = document.createElement('table');
        var tHead = document.createElement('thead');
        var tr = document.createElement('tr');
        var tBody = document.createElement('tbody');
        var botonComprar = document.createElement('button');
        botonComprar.type = 'submit';
        botonComprar.innerHTML = 'Comprar';
        botonComprar.id = 'comprar';
        var botonVolver = document.createElement('button');
        botonVolver.id = 'volver';
        botonVolver.innerHTML = 'Volver';

        /*Metemos todo lo creado, teniendo en cuenta que el thead y el tbody se 
        rellena por un for*/
        contenedorDos.appendChild(tabla);
        tabla.appendChild(tHead);
        tHead.appendChild(tr);
        /*Aqui realizamos el for para el thead*/
        var keys = ["id", "Primer plato", "segundo Plato", "Postre", "Precio", "Selección"];
        for (let i = 0; i < keys.length; i++) {
            var th = document.createElement('th');
            th.innerHTML = keys[i];
            tr.appendChild(th);
        }

        /*Seguimos*/
        tabla.appendChild(tBody);
        /*Aqui realizamos el for para el tbody*/
        for (let i = 0; i < arrayMenu.length; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerHTML = arrayMenu[i].id;
            for (let j = 0; j < arrayMenu[i].platos.length; j++) {
                var td2 = document.createElement("td");
                td2.innerHTML = arrayMenu[i].platos[0];
                var td3 = document.createElement("td");
                td3.innerHTML = arrayMenu[i].platos[1];
                var td4 = document.createElement("td");
                td4.innerHTML = arrayMenu[i].platos[2];

            }
            var td5 = document.createElement("td");
            td5.innerHTML = arrayMenu[i].precio;
            var check = document.createElement("input");
            check.type = 'checkbox';
            check.name = 'checkbox';
            check.className = 'checkbox';
            tBody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(check);
        }
        /*Seguimos*/
        contenedorDos.appendChild(botonComprar);
        contenedorDos.appendChild(botonVolver);

        /*Deshabilitado de botones*/
        botonAdministrador.disabled = true;
        botonEntrar.disabled = true;
        botonComprar.disabled = true;

        /*Capturamos el evento click sobre el boton Volver*/
        botonVolver.addEventListener('click', () => {

            /*Limpiamos el contenedorDos*/
            contenedorDos.innerHTML = ' ';

            /*Habilitacion de botones*/
            botonAdministrador.disabled = false;
            botonEntrar.disabled = false;
        });
    });

    /*Capturamos el evento click sobre el boton Entrar*/
    botonEntrar.addEventListener('click', () => {
        /*Creamos los elementos de la tabla*/
        var tabla = document.createElement('table');
        var tHead = document.createElement('thead');
        var tr = document.createElement('tr');
        var tBody = document.createElement('tbody');
        var botonComprar = document.createElement('button');
        botonComprar.type = 'submit';
        botonComprar.innerHTML = 'Comprar';
        botonComprar.id = 'comprar';
        var botonVolver = document.createElement('button');
        botonVolver.id = 'volver';
        botonVolver.innerHTML = 'Volver';

        /*Metemos todo lo creado, teniendo en cuenta que el thead y el tbody se 
        rellena por un for*/
        contenedorDos.appendChild(tabla);
        tabla.appendChild(tHead);
        tHead.appendChild(tr);
        /*Aqui realizamos el for para el thead*/
        var keys = ["id", "Primer plato", "segundo Plato", "Postre", "Precio", "Selección"];
        for (let i = 0; i < keys.length; i++) {
            var th = document.createElement('th');
            th.innerHTML = keys[i];
            tr.appendChild(th);
        }

        /*Seguimos*/
        tabla.appendChild(tBody);
        /*Aqui realizamos el for para el tbody*/
        for (let i = 0; i < arrayMenu.length; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerHTML = arrayMenu[i].id;
            for (let j = 0; j < arrayMenu[i].platos.length; j++) {
                var td2 = document.createElement("td");
                td2.innerHTML = arrayMenu[i].platos[0];
                var td3 = document.createElement("td");
                td3.innerHTML = arrayMenu[i].platos[1];
                var td4 = document.createElement("td");
                td4.innerHTML = arrayMenu[i].platos[2];

            }
            var td5 = document.createElement("td");
            td5.innerHTML = arrayMenu[i].precio;
            var check = document.createElement("input");
            check.type = 'checkbox';
            check.name = 'checkbox';
            check.className = 'checkbox';
            tBody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(check);
        }
        /*Seguimos*/
        contenedorDos.appendChild(botonComprar);
        contenedorDos.appendChild(botonVolver);

        /*Deshabilitado de botones*/
        botonAdministrador.disabled = true;
        botonEntrar.disabled = true;
        botonComprar.disabled = true;

        /*Capturamos el evento click sobre el boton Volver*/
        botonVolver.addEventListener('click', () => {

            /*Limpiamos el contenedorDos*/
            contenedorDos.innerHTML = ' ';

            /*Habilitacion de botones*/
            botonAdministrador.disabled = false;
            botonEntrar.disabled = false;
        });
    });



});