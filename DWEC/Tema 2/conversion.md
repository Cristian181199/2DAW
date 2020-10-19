# Actividad Conversión de tipos de datos

## Realiza todos los ejemplos y comenta cuáles te han resultado más interesantes así como en cuáles de ellos se te han presentado mayores dificultades

___

### Pequeña introducción

Nos dan un pequeño ejemplo de los tipos de datos que hay en JS;

- Hay 5 tipos de datos que pueden contener valores:

string -> cadena
number -> numero
boolean -> booleano
object -> objeto
function -> funcion

- Dentro de los objetos hay 6 tipos:

Object -> Objeto
Date -> Fecha
Array -> Array
String -> Cadena
Number -> Numero
Boolean -> Booleano

- Y tenemos 2 tipos que no pueden contener valores:

null
undefined
___

#### Ejemplo 1 The typeof Operator

Podemos usar el operador typeof, el cual nos devuelve el tipo de dato que le pasamos:

~~~ javascript
typeof "John"                 // Devuelve "string"
typeof 3.14                   // Devuelve "number"
typeof NaN                    // Devuelve "number"
typeof false                  // Devuelve "boolean"
typeof [1,2,3,4]              // Devuelve "object"
typeof {name:'John', age:34}  // Devuelve "object"
typeof new Date()             // Devuelve "object"
typeof function () {}         // Devuelve "function"
typeof myCar                  // Devuelve "undefined"
typeof null                   // Devuelve "object"
~~~

Curiosidades:
El tipo de dato de NaN es número.
El tipo de dato de array es objeto.
El tipo de dato de date es objeto.
El tipo de dato de null es objeto.
El tipo de dato de una varibale indefinida es undefined.
***No se puede usar typeof para determinar si un objeto JS es un aray o fecha***

***typeof siempre devuelve string***

___

