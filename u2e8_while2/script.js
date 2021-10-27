var input1;
var input2;

input1 = prompt ("¿Cuál fue el nombre del primer presidente de la democracia española?")
input2 = prompt ("¿Y su apellido?")

while(input1 !== "nombre" && input2 !== "apellido"){
    alert("ERROR. Intentelo de nuevo");
    input1 = prompt ("¿Cuál fue el nombre del primer presidente de la democracia española?");
    input2 = prompt ("¿Y su apellido?");

    if (input1 === ""){
        alert("ERROR. Te falta el nombre");
        input1 = prompt ("¿Cuál fue el nombre del primer presidente de la democracia española?");
        input2 = prompt ("¿Y su apellido?");
    } else if (input2 === "") {
        alert("ERROR. Te falta el apellido");
        input1 = prompt ("¿Cuál fue el nombre del primer presidente de la democracia española?");
        input2 = prompt ("¿Y su apellido?");
    }
}