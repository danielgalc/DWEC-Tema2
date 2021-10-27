var respuesta = prompt("Introduzca una edad:");

if (respuesta <= 12){
    alert ("0-12: Niño");
} else if (respuesta >= 13 && respuesta < 26){
    alert ("13-26: Joven");
} else if (respuesta > 26 && respuesta <= 60){
    alert ("27-60: Adulto");
} else if (respuesta > 60){
    alert (">60: Jubilado");
}