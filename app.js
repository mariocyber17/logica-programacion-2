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
let inputCelsius = document.getElementById('input-celsius');
let mensajeError = document.getElementById('mensaje-error');
let resultadoFahrenheit = document.getElementById('resultado-fahrenheit');
let resultadoKelvin = document.getElementById('resultado-kelvin');

formulario.addEventListener("submit", function(evento) {
    
    evento.preventDefault(); // Evita que la página se recargue
    let valorCrudo = inputCelsius.value; //leer valor del input
    let valorTrim = valorCrudo.trim(); //quitar espacios al inicio/fin
    if  (valorTrim == ""){
        mensajeError.textContent = "por favor ingresa un valor";// pa mostrar mensaje error en el div
        resultadoFahrenheit.textContent = "";//vaciar los resultados
        resultadoKelvin.textContent = "";//vaciar los resultados
        inputCelsius.focus();//devolver foco al input
        return; //para detener la función    

    }
    console.log(valorTrim);
    
    let temperatura=Number(valorTrim); //para convertir el valor a nuúmero
    if(isNaN(temperatura)){
        mensajeError.textContent = "El valor ingresado no es un número";// pa mostrar mensaje error en el div
        resultadoFahrenheit.textContent = "";//vaciar los resultados
        resultadoKelvin.textContent = "";//vaciar los resultados
        inputCelsius.focus();//devolver foco al input
        return; //para detener la función 

    }

});