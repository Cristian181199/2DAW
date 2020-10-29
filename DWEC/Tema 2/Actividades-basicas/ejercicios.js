function mifuncion() {
    var sala = document.getElementById("salas").value;
    var asesino = document.getElementById("asesino").value;

    console.log(sala);

    console.log(asesino);

    var items = {
        baile: "veneno",
        galeria: "trofeo",
        billar: "palo de billar",
        comedor: "cuchillo"
    };
    var disposicion = {
        parkes: "comedor",
        van: "galeria",
        sparr: "billar",
        kale: "baile"
    }
    
    console.log(disposicion);

    if (sala == disposicion[asesino]) {
        document.write("<p>" + asesino + " fue el asesino en la sala de " + disposicion[asesino] + " con el " + items[sala] + "!</p>");
    } else {
        document.write("<p>No has coincidido con el asesino, sigue intentando</p>");
    }
}
    