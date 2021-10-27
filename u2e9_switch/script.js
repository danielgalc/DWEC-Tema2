let respuesta = prompt("Introduzca una edad: ")

switch(true){
    case respuesta <= 12:
        alert("0-12: Niño");
        break;
    case respuesta >= 13 && respuesta < 26:
        alert ("13-26: Joven");
        break;
    case respuesta > 26 && respuesta <= 60:
        alert ("27-60: Adulto");
        break;
    case respuesta > 60:
        alert (">60: Jubilado");
        break;
}