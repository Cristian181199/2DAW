<?php

// echo "¡Hola, {$argv[1]}!\n"; <- MEJOR MANERA

// $nombre = $argv[1];
// echo "¡Hola, $nombre!\n";


// echo "¡Hola, " . $argv[1] . "!\n";



// if (isset($argv[1])) {
//     echo "¡Hola, {$argv[1]}!\n";
// } else {
//     echo "Falta el nombre del usuario\n";
// }


// if (!isset($argv[1])) {
//     echo "Falta el nombre del usuario\n";
// } else {
//     echo "¡Hola, {$argv[1]}!\n";
// }


// if (!isset($argv[1])) {
//     echo "Falta el nombre del usuario\n"; <- ESTE ES EL BUENO
//     exit(1);
// }
// echo "¡Hola, {$argv[1]}!\n";


// if (!isset($argv[1])) {
//     exit("Falta el nombre del usuario\n");
//     // exit(1);
// }
// echo "¡Hola, {$argv[1]}!\n";


if ($argc < 2) {
    echo "Falta el nombre del usuario\n";
    exit(1);
}
echo "¡Hola, {$argv[1]}!\n";
