'use strict'

$(function () {
    console.log("ready!");

    $.ajax({
        type: "GET",
        url: "prueba.html",
        success: function () {

            var botonAnade = document.querySelector("#boton");
            var inputPelicula = document.querySelector("#pelicula");
            var divPeliculas = document.querySelector("#response");
            var ul = document.querySelector("#lista");


            botonAnade.addEventListener("click", () => {
                console.log("Click en boton");
                var datos = inputPelicula.value;
                var li = document.createElement("li");
                li.innerHTML = datos;
                ul.appendChild(li);

            });
        }
    });

});