/*let entrada = prompt("Ingresa la temperatura en celsius:");
console.log(entrada)
let temperatura = Number(entrada);// para hacer el número de entrada un numero real y que no lo vea como cadena
console.log(temperatura)
while (isNaN(temperatura)) { //isNaN nos dice si una variable no es número
    console.log("lo que ingresaste no es un número")
    entrada = prompt("Ingresa la temperatura en celsius:");
    console.log(entrada)
    temperatura = Number(entrada);
}

let fahrenheit = (temperatura * (9/5))+32;
console.log(fahrenheit)
let kelvin = temperatura + 273.15;
console.log(kelvin)
*/
let formulario= document.getElementById('formulario');//para escuchar el evento "submit" y evitar que recargue
// Escuchamos el envío del formulario
formulario.addEventListener("submit", function(evento) {
    
    // Evita que la página se recargue
    evento.preventDefault();
});