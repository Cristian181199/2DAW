'use strict'

window.addEventListener('load', () => {


    /*Creamos la funcion constructora del objeto */
    function Menu(id, platos, precio, bebida = '') {
        this.id = id;
        this.platos = platos;
        this.precio = precio;
        this.bebida = bebida;


        /* Creamos el metodo para cambiar la bebida*/
        this.cambiarBebida = function (nuevaBebida) {
            this.bebida = nuevaBebida;
        }
    }

    /*Creamos los menus*/
    var sopa = new Menu(1, ["Sopa", "Pollo", "Yogurt"], 10.25);
    var ensalada = new Menu(2, ["Ensalada", "Ternera", "Flan"], 10.95);

    /*Almacenamos los menus en un array*/
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
        input1.required = 'true';
        input1.pattern = '/^$/';
        input1.title = 'El campo no puede ser vacio'

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
        input2.required = 'true';

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
        input3.required = 'true';

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
        input4.required = 'true';

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
        input5.required = 'true';

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

        /*Capturamos el evento click sobre el boton Volver*/
        botonVolver.addEventListener('click', () => {

            /*Limpiamos el contenedorDos*/
            contenedorDos.innerHTML = ' ';

            /*Habilitacion de botones*/
            botonAdministrador.disabled = false;
            botonEntrar.disabled = false;
        });

        /*Capturamos el click sobre el boton Añadir*/
        botonAñadir.addEventListener('click', () => {

            /*Capturamos los valores de los inputs*/
            var valorId = document.querySelector('#id').value;
 
            var valorPrimer = document.querySelector('#primerplato').value;

            var valorSegundo = document.querySelector('#segundoplato').value;
   
            var valorPostre = document.querySelector('#postre').value;
  
            var valorPrecio = document.querySelector('#precio').value;

            /*Creamos nuevo objeto Menu con los datos capturados de los inputs*/
            var nuevo = new Menu(valorId, [valorPrimer, valorSegundo, valorPostre], valorPrecio);

            /*Utilizamos la funcion push para meter en arrayMenu la informacion de los inputs
             y asi poder pintarla en la tabla*/
            arrayMenu.push(nuevo);
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

        /*Capturamos los checkboxs*/
        var checkboxs = document.querySelectorAll(".checkbox");

        /*Creamos contador para comprobar si es mas de 1*/
        var contador = 0;

        /*Comprobaciones de checkboxs*/
        for (let i = 0; i < checkboxs.length; i++) {
            checkboxs[i].addEventListener('change', function () {
                if (this.checked) {
                    contador++;
                } else if (!this.checked) {
                    contador--;
                }
                if (contador == 0) {
                    botonComprar.disabled = true;
                } else if (contador >= 1) {
                    botonComprar.disabled = false;
                    /*Capturamos el click del boton Comprar
                      con arrayMenu[i], encontramos en el
                      array de menus el menu a cambiar la bebida ya que coinciden*/
                    botonComprar.addEventListener('click', () => {
                        var bebidapedida = prompt('¿Que bebida quieres?: ');
                        arrayMenu[i].cambiarBebida(bebidapedida);
                        setCookie(arrayMenu[i].id, bebidapedida);
                    });

                }
            });

        }

    });

});