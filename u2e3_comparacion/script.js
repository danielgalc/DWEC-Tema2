/* Primera operación */

var operacion1 = (10 == 10); // Devuelve true
alert("La operación 10 == 10 es igual a " + operacion1);

/* Segunda operación */

var operacion2 = (10 === 10); // Devuelve true
alert("La operación 10 === 10 es igual a " + operacion2);

/* Tercera operación */

var operacion3 = (10 === 10.0); // Devuelve true
alert("La operación 10 === 10.0 es igual a " + operacion3);

/* Cuarta operación */

var operacion4 = ("Laura" == "laura"); // Devuelve false
alert("La operación Laura == laura es igual a " + operacion4);

/* Quinta operación */

var operacion5 = ("Laura" > "laura"); // Devuelve false
alert("La operación Laura > laura es igual a " + operacion5);

/* Sexta operación */

var operacion6 = ("Laura" < "laura"); // Devuelve true
alert("La operación Laura < laura es igual a " + operacion6);

/* Séptima operación */

var operacion7 = ("123" == 123); // Devuelve true
alert('La operación "123" == 123 es igual a ' + operacion7);

/* Octava operación */

var operacion8 = ("123" === 123); // Devuelve false
alert('La operación "123" === 123 es igual a ' + operacion8);

/* Novena operación */

var operacion9 = (parseInt("123") === 123); // Devuelve true
alert('La operación parseInt("123") === 123 es igual a ' + operacion9);